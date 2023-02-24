import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonedasComponent } from './pages/monedas/monedas.component';
import { MonedaComponent } from './pages/moneda/moneda.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SalidaComponent } from './components/salida/salida.component'
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    MonedasComponent,
    MonedaComponent,
    SalidaComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    MonedasComponent,
    MonedaComponent,
    SalidaComponent,
    RouterLink
  ]
})
export class MonedaModule { }
