import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { Gif } from './interfaces/gifs';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResultadosComponent,
    BusquedaComponent,
    GifsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GifsPageComponent,
    ResultadosComponent,
    BusquedaComponent
  ]
})
export class GifsModule { }
