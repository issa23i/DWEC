

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonedaModule } from './moneda/moneda.module';
import { SharedModule } from './moneda/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    /* RouterModule */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonedaModule,
    SharedModule,
    
    HttpClientModule
  ],
exports: [
  RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
