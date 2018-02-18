import { Component, OnInit, Input } from '@angular/core';

import { ChatMessage } from '../model/chatMessage';


@Component({
  selector: 'app-chat-message-container',
  templateUrl: './chat-message-container.component.html',
  styleUrls: ['./chat-message-container.component.css']
})
export class ChatMessageContainerComponent implements OnInit {

  @Input() chatMessages: ChatMessage[];
  @Input() myName: string;

  constructor() { }

  ngOnInit() {
  }

}
