import { Injectable } from '@nestjs/common';
import { EtherProvider } from '../lib/ether.provider';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MutexManager } from './MutexManager';
import { ConfigService } from '@nestjs/config';
import { SeaportProvider } from '../lib/seaport.provider';
import { TaskPublisher } from '../task/task.publisher';
import { MapContainer } from '../map.container';
import { ethers } from 'ethers';
import { sleep, WebSocketClient } from '../websocket/websocket.client';
import { TaskContainer } from '../task.container';
import * as moment from 'moment';

@Injectable()
export class ContractEventSubscribeService {
  private vrfBlockNumber = 0;
  private readonly eventOrdersMatched = 'OrdersMatched';
  private readonly eventOrdersCancelled = 'OrdersCancelled';
  static instance: any;

  constructor(
      private readonly seaportProvider: SeaportProvider,
      private readonly etherProvider: EtherProvider,
      private readonly mutexManager: MutexManager,
      private configService: ConfigService,
      private readonly mapContainer: MapContainer,
      private readonly taskPublisher: TaskPublisher,
      private readonly webSocketClient: WebSocketClient,
      private readonly taskContainer: TaskContainer,
  ) {
    if (ContractEventSubscribeService.instance) {
      return ContractEventSubscribeService.instance;
    }
    ContractEventSubscribeService.instance = this;
  }


  async handleRandomRequestJob() {
    while (true) {
      try {
        await this.handleLastBlockCron()
        await sleep(1000);
      } catch (e) {
        console.error(e);
        await sleep(3 * 1000);
      }
    }
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  async handleLastBlockCron() {
    if (this.mapContainer.size() === 0) return;
    const firstRequestId = this.mapContainer.getFirstKey();

    const vrfContract = this.etherProvider.getVrfConsumerContract();
    const provider = this.etherProvider.getProvider();

    let filter = vrfContract.filters.ReturnedRandomness();
    const fromBlock = (this.vrfBlockNumber > 0 ? this.vrfBlockNumber : this.etherProvider.getVrfFromBlock()) + 1;
    const toBlock = await this.etherProvider.getProvider().getBlockNumber();
    if (fromBlock >= toBlock) {
      return;
    }
    let filterLog = {
      fromBlock,
      toBlock,
      topics: filter.topics
    }
    await provider.getLogs(filterLog).then((result) => {
      for (const res of result) {
        const event = vrfContract.interface.parseLog(res);
        if (event && event.name === 'ReturnedRandomness') {
          const randomWords = event.args['randomWords'].map((e) =>
              ethers.BigNumber.from(e).toString(),
          );
          const requestId = event.args['requestId'].toString();
          if (firstRequestId === requestId) {
            console.log(`fillOrderCatchVrfRequestId: ${moment().format('YYYY-MM-DD HH:mm:ss')}...`)
            const isExist = this.mapContainer.get(requestId);
            if (isExist) {
              isExist.randomWords = randomWords;
              this.mapContainer.set(requestId, isExist);
              this.taskPublisher.emitTaskEvent({
                requestId,
                takerOrder: isExist.takerOrders,
                makerOrder: isExist.makerOrders,
                randomStrategy: isExist.randomStrategy,
                premiumOrder: [],
                randomWords: randomWords,
                modeOrderFulfillments: isExist.modeOrderFulfillments,
              });
            } else {
              this.mapContainer.set(requestId, {
                randomWords,
              });
            }
            this.mapContainer.delete(requestId);
          }
        }
      }
    }).catch(e => {
      console.error(e);
    })
    this.vrfBlockNumber = toBlock;
  }


  async handleTaskJob() {
    while (true) {
      await this.handleTask();
      await sleep(200);
    }
  }


  // @Cron(CronExpression.EVERY_30_SECONDS)
  async handleTask() {
    if (this.taskContainer.size() === 0) return;
    const key = this.taskContainer.getFirstKey();

    const { makerOrders, takerOrders, randomNumberCount, randomStrategy, modeOrderFulfillments, orderHashes } = this.taskContainer.get(key);
    this.taskContainer.delete(key);
    const contract = this.etherProvider.getContract();

    try {
      console.log(`Prepare start...`);
      console.log(`makerOrders: ${JSON.stringify(makerOrders)}`);
      console.log(`takerOrders: ${JSON.stringify(takerOrders)}`);
      console.log(`randomNumberCount: ${randomNumberCount}`);
      console.log(`fillOrderPrepareStart: ${moment().format('YYYY-MM-DD HH:mm:ss')}...`);
      const result = await contract.prepare(
          [...makerOrders, ...takerOrders],
          [],
          [],
          randomNumberCount,
      );
      console.log(`fillOrderPrepareSuccess: ${moment().format('YYYY-MM-DD HH:mm:ss')}...`);
      console.log('result.hash:::', result.hash);

      let receipt = null;

      let retryCount = 0;

      while (result.hash && receipt === null && retryCount < 100) {
        console.log('retryCount: ', retryCount);
        retryCount++;
        receipt = await this.etherProvider
            .getProvider()
            .getTransactionReceipt(result.hash);
        await sleep(1000);
      }

      console.log('receipt:::', receipt);

      if (receipt && receipt.status) {
        for (const log of receipt.logs || []) {
          if (`${log.address}`.toUpperCase() != `${this.etherProvider.getVrfPublisherContractAddress()}`.toUpperCase()) {
            continue;
          }
          const event = this.etherProvider
              .getVrfPublisherContract()
              .interface.parseLog(log);
          if (event && event.name === 'RandomWordsRequested') {
            const requestId = event.args['requestId']?.toString();
            console.log('requestId:::', requestId);
            console.log(`fillOrderMatchStart: ${moment().format('YYYY-MM-DD HH:mm:ss')}...`);
            this.mapContainer.set(requestId, {
              makerOrders,
              takerOrders,
              randomStrategy,
              modeOrderFulfillments,
            });

            this.webSocketClient.sendPrepareMessage(
                JSON.stringify({
                  key,
                  value: {
                    status: true,
                    data: {
                      requestId,
                      orderHashes
                    }
                  }
                }),
            );
          }
        }
      } else {
        this.webSocketClient.sendPrepareMessage(
            JSON.stringify({
              key,
              value: {
                status: false,
                data: 'Send tx failed'
              }
            }),
        );
      }

    } catch (error) {
      console.error(error);
      this.webSocketClient.sendPrepareMessage(
          JSON.stringify({
            key,
            value: {
              status: false,
              data: error.message
            },
          }),
      );
    }
  }

}
