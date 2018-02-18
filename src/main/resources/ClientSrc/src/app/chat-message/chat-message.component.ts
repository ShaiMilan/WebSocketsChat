import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() isMe: boolean;
  @Input() message: string;
  @Input() date: Date;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log('Init message: ', this.message);
  }

}
