import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DhlComponent } from './components/dhl/dhl.component';
import { CeaceroComponent } from './components/ceacero/ceacero.component';
import { IbanComponent } from './components/iban/iban.component';

@NgModule({
  declarations: [
    AppComponent,
    DhlComponent,
    CeaceroComponent,
    IbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
