import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VerPaisComponent } from './pais/ver-pais/ver-pais.component';
import { PorPaisComponent } from './pais/por-pais/por-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: '/pais/:id',
    component: VerPaisComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
