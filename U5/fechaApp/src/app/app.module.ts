import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FechaModule } from './fecha/fecha.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FechaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
