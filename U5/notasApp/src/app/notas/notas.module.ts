import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';



@NgModule({
  declarations: [
    EntradaComponent,
    SalidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EntradaComponent,
    SalidaComponent
  ]
})
export class NotasModule { }
