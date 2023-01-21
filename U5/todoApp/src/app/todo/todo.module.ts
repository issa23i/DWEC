import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from './entrada/entrada.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EntradaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EntradaComponent,
    ListadoComponent
  ]
})
export class TodoModule { }
