import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.router.config';

import { SocketService } from './services/socket.service';
import { SockJsService } from './services/sock-js.service';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageContainerComponent } from './chat-message-container/chat-message-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatMessageComponent,
    ChatMessageContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: SocketService, useClass: SockJsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
