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
      const makerHash = data.makerOrder[0].parameters.offer[0].itemType === 3;
      const orderPrices = [];
      if (data.randomWords.length === 1) {
        for (let order of (makerHash ? data.makerOrder : data.takerOrder)) {
          const price = await this.calculateOrderPrice(data.randomWords[0].toString(), data.randomStrategy, order, data.makerOrder)
          orderProbility.push({
            orderHash: price.orderHash,
            numerator: price.numerator,
            denominator: price.denominator
          });
          orderPrices.push(price)
        }
      } else if (data.randomWords.length > 1) {
        if (makerHash) {
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
            orderPrices.push(price)
          }
        } else {
          const price = await this.calculateOrderPrice(data.randomWords[0].toString(), data.randomStrategy, data.takerOrder[0], data.makerOrder[0]);
          orderProbility.push({
            orderHash: price.orderHash,
            numerator: price.numerator,
            denominator: price.denominator
          });
          orderPrices.push(price)
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

  /**
   * @param randomWord
   * @param randomStrategy
   * @param order
   * @private
   */
  private async calculateOrderPrice(randomWord: string, randomStrategy: any, order: any, makerOrder: any): Promise<OrderPrice> {
    const execResult = await this.pythonService.executeScript(
        './src/python/generate_beta_distribution.py',
        [randomWord, randomStrategy],
    );
    const result = JSON.parse(execResult);
    const numerator = result[0];
    const denominator = result[1];
    const rate = _.round(_.divide(numerator, denominator), 4);
    const offer = order.parameters.offer;
    const consideration = order.parameters.consideration;
    let price = 0;
    let itemSize = 1;
    if (offer[0].itemType === 1) {
      const ethereumStartValue = ethers.BigNumber.from(offer[0].startAmount);
      const ethereumEndValue = ethers.BigNumber.from(offer[0].endAmount);

      const start = parseFloat(ethers.utils.formatEther(ethereumStartValue));
      const end = parseFloat(ethers.utils.formatEther(ethereumEndValue));
      price = new BigNumber(end).minus(start).multipliedBy(rate).plus(start)
        .multipliedBy(order.numerator).dividedBy(order.denominator).toNumber();
    } else if (consideration[0].itemType === 1) {
      const ethereumStartValue = ethers.BigNumber.from(consideration[0].startAmount);
      const ethereumEndValue = ethers.BigNumber.from(consideration[0].endAmount);

      const start = parseFloat(ethers.utils.formatEther(ethereumStartValue));
      const end = parseFloat(ethers.utils.formatEther(ethereumEndValue));
      price = new BigNumber(end).minus(start).multipliedBy(rate).plus(start)
        .multipliedBy(order.numerator).dividedBy(order.denominator).toNumber();
    }

    if (offer[0].itemType === 3) {
      itemSize = new BigNumber(offer[0].endAmount).multipliedBy(makerOrder.numerator).dividedBy(makerOrder.denominator).toNumber();
    } else if (consideration[0].itemType === 3) {
      itemSize = new BigNumber(consideration[0].endAmount).multipliedBy(makerOrder.numerator).dividedBy(makerOrder.denominator).toNumber();
    }

    price = new BigNumber(price).dividedBy(itemSize).toNumber();
    const orderHash = this.etherProvider
        .getSeaport()
        .getOrderHash(makerOrder.parameters);
    return {
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
