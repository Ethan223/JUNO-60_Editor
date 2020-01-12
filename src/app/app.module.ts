import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Juno60Component } from './juno60/juno60.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatRadioModule, MatButtonToggleModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    Juno60Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
