import { Injectable, Scope } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { MapContainer } from '../map.container';
import {
  SeaportProvider,
} from '../lib/seaport.provider';
import { EtherProvider } from '../lib/ether.provider';
import { TaskPublisher } from '../task/task.publisher';
import { MatchOrdersFulfillment } from '@opensea/seaport-js/lib/types';
import * as moment from 'moment';
import { TaskContainer } from '../task.container';
import { ConfigService } from "@nestjs/config";

export function sleep(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

@Injectable({ scope: Scope.DEFAULT })
export class WebSocketClient {
  public client: Socket;
  static instance: any;

  constructor(
      private readonly seaportProvider: SeaportProvider,
      private readonly etherProvider: EtherProvider,
      private readonly mapContainer: MapContainer,
      private readonly taskContainer: TaskContainer,
      private readonly taskPublisher: TaskPublisher,
      private readonly configService: ConfigService
  ) {
    if (WebSocketClient.instance) {
      return WebSocketClient.instance;
    }
    const host = this.configService.get('WS_HOST', 'localhost');
    const port = this.configService.get('WS_PORT', '3000');
    this.client = io(`ws://${host}:${port}`);

    WebSocketClient.instance = this;
    // this.client  = new WebSocket('ws://localhost:3000');

    this.client.on('open', () => {
      console.log('Connected to WebSocket server');
    });

    this.client.on('task1', async (message) => {
      console.log('Received message:', moment().format('YYYY-MM-DD HH:mm:ss'), message);
      console.log(`fillOrderRequestSuccessTask: ${moment().format('YYYY-MM-DD HH:mm:ss')}...`);
      const task = JSON.parse(message);
      const key = task?.key;
      const value = JSON.parse(task?.value);
      const seaport = this.etherProvider.getSeaport();
      const orderHashes = [];
      const takerOrders = value.takerOrders;
      const makerOrders = value.makerOrders;
      const randomStrategy = value.randomStrategy;
      const modeOrderFulfillments = value.modeOrderFulfillments;
      const randomNumberCount = value.randomNumberCount;

      if (makerOrders && makerOrders.length) {
        for (const makerOrder of makerOrders) {
          orderHashes.push(seaport.getOrderHash(makerOrder.parameters))
        }
      }

      if (takerOrders && takerOrders.length) {
        for (const takerOrder of takerOrders) {
          orderHashes.push(seaport.getOrderHash(takerOrder.parameters))
        }
      }

      this.taskContainer.set(key, {
        makerOrders,
        takerOrders,
        randomNumberCount,
        modeOrderFulfillments,
        randomStrategy,
        orderHashes
      })

    });

    this.client.on('task2', (message) => {
      console.log('Received message:', message);
      const task = JSON.parse(message);
      const key = task?.key;
      const value = task?.value;
      this.sendPrepareMessage(
          JSON.stringify({
            key,
            value,
          }),
      );
    });

    this.client.on('close', () => {
      console.log('Disconnected from WebSocket server');
    });
  }

  sendPrepareMessage(message: string) {
    this.client.emit('prepare', message);
  }

  sendProbabilityMessage(message: string) {
    this.client.emit('probability', message);
  }
}
