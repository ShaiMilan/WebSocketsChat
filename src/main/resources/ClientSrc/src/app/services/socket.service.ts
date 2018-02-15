import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

export class socketMessage {
  queue: string;
  body: any;
}

export const GENERAL_QUEUE_ID = 'ֹֹֹֹ__general';

@Injectable()
export abstract class SocketService {

  constructor() { }

  abstract connectToSocket(url: string, queues?: string[] ,user?: string, password?: string, headers?: any): Rx.Subject<socketMessage>;
  abstract onMessage(queueId: string, body: any): void;
  abstract sendMessage(queueId: string, body: any, headers?: any, mustExist?: boolean): void;
  abstract disconnect(): void;
}
