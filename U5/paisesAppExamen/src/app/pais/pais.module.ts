import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';

import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

 



@NgModule({
  declarations: [
    PorPaisComponent,
    VerPaisComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    PorPaisComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
