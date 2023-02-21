import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const ROUTES: Routes = [
  {//es el primer componente, cuando ponemos la URL del proyecto y nada más
path: '',
component: PorPaisComponent,
pathMatch: 'full'
},
{
  path: 'pais/:id',
  component: VerPaisComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  
})
export class AppRoutingModule { }
