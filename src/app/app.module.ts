import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DhlComponent } from './components/dhl/dhl.component';
import { CeaceroComponent } from './components/ceacero/ceacero.component';
import { IbanComponent } from './components/iban/iban.component';
import { ApiComponent } from './components/api/api.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DhlComponent,
    CeaceroComponent,
    IbanComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
