import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PorPaisComponent,
    VerPaisComponent
  ],
  exports: [
    PorPaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class PaisModule { }