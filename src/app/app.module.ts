import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { JoinService } from './services/join.service'

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
