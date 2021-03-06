import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { SocketService, socketMessage, GENERAL_QUEUE_ID } from '../services/socket.service';
import { ChatMessage } from '../model/chatMessage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private name: string;
  private socketPath: string = '/gs-guide-websocket';

  private subscriptionConnectionArray: Rx.Subscription[] = [];
  private socketMessagesSubject: Rx.Subject<socketMessage>;
  private socketIsOpen: boolean = false;

  private chatMessagesArray: ChatMessage[] = [];

  @ViewChild('messages') messages: ElementRef;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    
  }

  connect() {
    this.messages.nativeElement.innerHTML += "Connecting to url: " + this.socketPath + "<br/>";
    this.socketMessagesSubject = this.socketService.connectToSocket(this.socketPath, ['/topic/greetings']);
    this.subscriptionConnectionArray.push(this.socketMessagesSubject.subscribe((sm: socketMessage) => {
      switch (sm.queue) {
        case GENERAL_QUEUE_ID:
          this.socketIsOpen = true;
          this.messages.nativeElement.innerHTML += "General: Socket Opened successfully, url: " + this.socketPath + "<br/>";
          console.log("Socket Opened successfully, url: ", this.socketPath);
          break;
        case '/topic/greetings':
          this.messages.nativeElement.innerHTML += "/topic/greetings: Got message back from server: " + sm.body + "<br/>";
          console.log("/app/hello: Got message back from server: ", sm.body);
          let message = sm.body.substring(sm.body.indexOf("Message: ") + 9);
          let senderName = sm.body.substring(sm.body.indexOf("User: ") + 6, sm.body.lastIndexOf("|"));
          senderName = senderName.trim();
          this.chatMessagesArray.push({
            id: '111',
            message,
            senderName,
            sentDate: new Date()
          })
          break;
        default:
          console.log(sm);
          this.messages.nativeElement.innerHTML += "Default: " + sm.body + "<br/>";
          break;
      }
    },
    (error) => {
      this.socketIsOpen = false;
      this.messages.nativeElement.innerHTML += "Socket Closed due to the following error: " + error + "<br/>";
      console.error("Socket Closed due to the following error: " + error);
    },
    () => {
      this.socketIsOpen = false;
      this.messages.nativeElement.innerHTML += "Socket Closed" + "<br/>";
      console.log("Socket Closed");
    }));
  }

  disconnect() {
    if(this.socketIsOpen) {
      this.socketService.disconnect();
    }
    for(let sub of this.subscriptionConnectionArray) {
      sub.unsubscribe();
    }
  }

  sendMessage(message) {
    this.socketService.sendMessage('/app/hello', {
      name: this.name,
      message,
      date: 'Date'
    });
  }

  ngOnDestroy() {
    for(let sub of this.subscriptionConnectionArray) {
      sub.unsubscribe();
    }
    this.subscriptionConnectionArray = [];
  }
}
