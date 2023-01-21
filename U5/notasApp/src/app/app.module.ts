import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotasModule } from './notas/notas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
