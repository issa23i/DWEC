import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberModule } from './number/number.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
