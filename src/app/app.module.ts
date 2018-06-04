import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormModule} from '@angular/core';

import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { JoinService } from './services/join.service'

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [JoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
