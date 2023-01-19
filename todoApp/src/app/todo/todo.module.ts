import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from './entrada/entrada.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    EntradaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EntradaComponent,
    ListadoComponent
  ],
})
export class TodoModule { }
