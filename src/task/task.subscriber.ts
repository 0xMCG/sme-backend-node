import { Injectable } from '@nestjs/common';
import { OrderProbilityStruct } from '../lib/typechain-types-dual/contracts/Seaport';
import { SeaportProvider } from '../lib/seaport.provider';
import {OrderPrice, Task, TaskPublisher} from './task.publisher';
import { PythonService } from '../python/python.service';
import { MatchOrdersFulfillment } from '@opensea/seaport-js/lib/types';
import { WebSocketClient } from '../websocket/websocket.client';
import * as _ from 'lodash';
import { ContractTransaction, ethers } from "ethers";
import { EtherProvider } from "../lib/ether.provider";
import BigNumber from "bignumber.js";
@Injectable()
export class TaskSubscriber {
  constructor(
      private readonly taskEventPublisher: TaskPublisher,
      private readonly pythonService: PythonService,
      private readonly seaportProvider: SeaportProvider,
      private readonly etherProvider: EtherProvider,
      private readonly webSocketClient: WebSocketClient,
  ) {
    this.subscribeToEvents();
  }

  private subscribeToEvents() {
    this.taskEventPublisher.taskEvent$.subscribe(async (data: Task) => {
      console.log('Received event:', data);
      const orderProbility: OrderProbilityStruct[] = [];
      const modeOrderFulfillments: MatchOrdersFulfillment[] =
          data.modeOrderFulfillments;
      const listOrder = data.makerOrder[0].parameters.offer[0].itemType === 3;
      const orderPrices = [];
      if (data.randomWords.length === 1) {
        for (let i = 0; i < data.makerOrder.length; i++) {
          const order = listOrder ? data.makerOrder[i] : data.takerOrder[i];
          const price = await this.calculateOrderPrice(data.randomWords[0].toString(), data.randomStrategy, order, data.makerOrder[i])
          orderProbility.push({
            orderHash: price.orderHash,
            numerator: price.numerator,
            denominator: price.denominator
          });
          orderPrices.push({
            ...price,
            orderHash: price.matchOrderHash
          })
        }
      } else if (data.randomWords.length > 1) {
        if (listOrder) {
          for (let i = 0; i < data.randomWords.length; i++) {
            if (i >= data.makerOrder.length) {
              break;
            }
            const price = await this.calculateOrderPrice(data.randomWords[i].toString(), data.randomStrategy, data.makerOrder[i], data.makerOrder[i]);
            orderProbility.push({
              orderHash: price.orderHash,
              numerator: price.numerator,
              denominator: price.denominator
            });
            orderPrices.push({
              ...price,
              orderHash: price.matchOrderHash
            })
          }
        } else {
          const price = await this.calculateOrderPrice(data.randomWords[0].toString(), data.randomStrategy, data.takerOrder[0], data.makerOrder[0]);
          orderProbility.push({
            orderHash: price.orderHash,
            numerator: price.numerator,
            denominator: price.denominator
          });
          orderPrices.push({
            ...price,
            orderHash: price.matchOrderHash
          })
        }
      }


      try {
        console.log(`matchOrdersWithRandom start....`);
        const orders = [...data.makerOrder, ...data.takerOrder]
        console.log(`orders: ${JSON.stringify(orders)}`);
        console.log(`modeOrderFulfillments: ${JSON.stringify(modeOrderFulfillments)}`);
        console.log(`requestId: ${data.requestId}`);
        console.log(`orderProbility: ${JSON.stringify(orderProbility)}`);

        const r = await this.etherProvider
            .getContract()
            .matchOrdersWithRandom(
                [...data.makerOrder, ...data.takerOrder],
                modeOrderFulfillments,
                data.requestId,
                orderProbility,
                { gasLimit: 1500000 },
            )
        const txHash = r.hash;
        this.webSocketClient.sendProbabilityMessage(
          JSON.stringify({ orderPrices, txHash }),
        );
      } catch (error) {
        console.log('matchError', error)
      }
    });
  }

  private async parseScriptResult(randomStrategy: any, randomWord: string): Promise<{numerator: number, denominator: number}> {
    const execResult = await this.pythonService.executeScript(
      './src/python/generate_beta_distribution_1.py',
      [randomWord, randomStrategy],
    );
    const result = JSON.parse(execResult);
    const strategyNumber = new BigNumber(randomStrategy).toNumber();
    // common random strategy
    if (strategyNumber === 0) {
      return {
        numerator: new BigNumber(result[0]).toNumber(),
        denominator: new BigNumber(result[1]).toNumber()
      }
    }

    // initial bid order random strategy
    const price = new BigNumber(result[1]).minus(result[0])
      .multipliedBy(result[2])
      .dividedBy(result[3])
      .plus(result[0]);
    const denominator = 1000000;
    BigNumber.config({ROUNDING_MODE: BigNumber.ROUND_DOWN});
    const numerator = new BigNumber(new BigNumber(price).dividedBy(1010)
      .multipliedBy(denominator).toFixed(0))
      .toNumber();
    return {
      numerator,
      denominator
    }
  }

  /**
   * @param randomWord
   * @param randomStrategy
   * @param order
   * @private
   */
  private async calculateOrderPrice(randomWord: string, randomStrategy: any, order: any, makerOrder: any): Promise<OrderPrice> {
    // const execResult = await this.pythonService.executeScript(
    //     './src/python/generate_beta_distribution.py',
    //     [randomWord, randomStrategy],
    // );
    // const result = JSON.parse(execResult);
    const {numerator, denominator} = await this.parseScriptResult(randomStrategy, randomWord);
    // const numerator = result[0];
    // const denominator = result[1];
    const rate = _.round(_.divide(numerator, denominator), 4);
    const offer = makerOrder.parameters.offer;
    const consideration = makerOrder.parameters.consideration;
    let price = 0;
    let itemSize = 1;
    if (offer[0].itemType === 1) {
      let start = 0, end = 0;
      for (const o of offer) {
        const ethereumStartValue = ethers.BigNumber.from(o.startAmount);
        const ethereumEndValue = ethers.BigNumber.from(o.endAmount);
        start = new BigNumber(parseFloat(ethers.utils.formatEther(ethereumStartValue))).plus(start).toNumber();
        end = new BigNumber(parseFloat(ethers.utils.formatEther(ethereumEndValue))).plus(end).toNumber();
      }
      price = new BigNumber(end).minus(start).multipliedBy(rate).plus(start)
        .multipliedBy(makerOrder.numerator).dividedBy(makerOrder.denominator).toNumber();
    } else if (consideration[0].itemType === 1) {
      let start = 0, end = 0;
      for (const c of consideration) {
        const ethereumStartValue = ethers.BigNumber.from(c.startAmount);
        const ethereumEndValue = ethers.BigNumber.from(c.endAmount);
        start = new BigNumber(parseFloat(ethers.utils.formatEther(ethereumStartValue))).plus(start).toNumber();
        end = new BigNumber(parseFloat(ethers.utils.formatEther(ethereumEndValue))).plus(end).toNumber();
      }
      price = new BigNumber(end).minus(start).multipliedBy(rate).plus(start)
        .multipliedBy(makerOrder.numerator).dividedBy(makerOrder.denominator).toNumber();
    }

    if (offer[0].itemType === 3) {
      itemSize = new BigNumber(offer[0].endAmount).multipliedBy(makerOrder.numerator).dividedBy(makerOrder.denominator).toNumber();
    } else if (consideration[0].itemType === 3) {
      itemSize = new BigNumber(consideration[0].endAmount).multipliedBy(makerOrder.numerator).dividedBy(makerOrder.denominator).toNumber();
    }

    price = new BigNumber(price).dividedBy(itemSize).toNumber();
    const orderHash = this.etherProvider
        .getSeaport()
        .getOrderHash(order.parameters);
    const matchOrderHash = this.etherProvider.getSeaport().getOrderHash(makerOrder.parameters);
    return {
      matchOrderHash,
      orderHash,
      price,
      numerator,
      denominator,
      itemNumerator: makerOrder.numerator,
      itemDenominator: makerOrder.denominator,
      itemSize
    }
  }
}
