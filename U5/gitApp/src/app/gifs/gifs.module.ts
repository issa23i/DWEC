import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent,
  ],
  imports: [
    CommonModule,
    SidebarComponent,
  ],
  exports: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ]
})
export class GifsModule { }
