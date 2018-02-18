import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import * as Rx from 'rxjs/Rx';

import * as SockJS from "sockjs-client";
import * as stompjs from 'stompjs';
import { Client, Frame, Message } from "stompjs";
import { socketMessage, GENERAL_QUEUE_ID } from './socket.service';

class SocketQueue {
  id: string;
  subscription?: any;
}

@Injectable()
export class SockJsService extends SocketService {

  private socket: WebSocket;
  private stompClient: Client;
  private subject: Rx.Subject<socketMessage>;
  private isOpen: boolean = false;
  private subscribedQueues: SocketQueue[] = [];

  connectToSocket(url: string, queues: string[] = [] ,user: string = '', password: string = '', headers: any = {}): Rx.Subject<socketMessage> {
    // Creating a socket with a given URL
    this.socket = new SockJS(url) as WebSocket;

    // Configuring the Stomp protocol to ride over the given socket
    this.stompClient = stompjs.over(this.socket);
    this.stompClient.debug = (str) => {
      // Do nothing so no console messages will be printed
    };

    console.log("Opening Socket to: ", url, "With the following Queues: ", queues, " and the following Headers: ", headers);
    // Connecting to the socket
    this.stompClient.connect(user, password,
      // When successfully connected
      (frame: Frame) => {
        console.log('Connected to: ', url, 'With frame: ', frame);
        this.isOpen = true;
        this.onMessage(GENERAL_QUEUE_ID, { content: true });
        // subscribing to the queues
        for(let queue of this.subscribedQueues) {
          queue.subscription = this.stompClient.subscribe(queue.id, (message) => {
            this.onMessage(queue.id, JSON.parse(message.body));
          });
        }
      },
      (error: string) => {
        this.subject.error(error);
      }
    );

    // Disconnecting from old socket if opened
    if(this.subject && !this.subject.closed) {
      if(this.stompClient.connected) {
        this.disconnect();
      }
    }

    this.subject = new Rx.Subject<socketMessage>();

    for(let queueId of queues) {
      this.subscribedQueues.push({
        id: queueId
      })
    }

    return this.subject;
  }

  queueExists(queueId: string): boolean {
    return this.subscribedQueues.filter((queue) => {
        return queue.id === queueId;
    }).length !== 0
  }

  onMessage(queueId: string, body: any): void {
    this.subject.next({
      queue: queueId,
      body: body.content
    });
  }

  sendMessage(queueId: string, body: any, headers: any = {}, mustExist: boolean = false): void {
    // // Checking if the queue exists
    // if(!this.queueExists(queueId)) {
    //   // Queue not exists, checking if have to be existed or create a new one
    //   if(mustExist) {
    //     console.error('Queue "' + queueId + '" does not exist, message was not sent');
    //     return;
    //   }
    //   this.subscribedToQueue(queueId);
    // }

    // Sending the message
    this.stompClient.send(queueId, headers, JSON.stringify(body));
  }

  subscribedToQueue(queueId) {
    if(!this.queueExists(queueId)) {
      this.subscribedQueues.push({
        id: queueId,
        subscription: this.stompClient.subscribe(queueId, (message) => {
            this.onMessage(queueId, JSON.parse(message.body));
          })
      })
    }
  }

  disconnect(): void {
    // unsubscribing from all queues
    for(let queue of this.subscribedQueues) {
      queue.subscription.unsubscribe();
    }
    this.subscribedQueues = [];

    // Disconnecting
    this.stompClient.disconnect(() => {
      // Compliting the subject observable
      this.subject.complete();
    });
    this.isOpen = false;
  }
}
