import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from './comun/header.component';
import {AmigosComponent} from './comun/amigos.component';
import {ChatboxComponent} from './comun/chatbox.component';
import {ConversacionService} from './conversacion.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AmigosComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConversacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
