
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedaComponent } from './moneda/pages/moneda/moneda.component';
import { MonedasComponent } from './moneda/pages/monedas/monedas.component';

const routes: Routes = [
 {
  path: '',
component: MonedasComponent,
pathMatch: 'full'
 },
 {
  path: 'moneda/:id',
  component: MonedaComponent
 },
 {
  path: '**',
  redirectTo: ''
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
