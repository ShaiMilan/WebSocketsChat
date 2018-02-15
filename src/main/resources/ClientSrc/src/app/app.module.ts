import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.router.config';

import { SocketService } from './services/socket.service';
import { SockJsService } from './services/sock-js.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: SocketService, useClass: SockJsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
