import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { ResultadosComponent } from './gifs/resultados/resultados.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GifsPageComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
