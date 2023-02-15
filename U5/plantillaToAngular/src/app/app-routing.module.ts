import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './shared/search/search.component';
import { VerSearchComponent } from './pages/ver-search/ver-search.component';

const routes: Routes = [
  {
  path: 'home',
  component: PortafolioComponent,
  pathMatch: 'full'
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
  path: 'item',
  component: ItemComponent
  },
  {
    path: 'search/:termino',
    component: VerSearchComponent
  },
  {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'home'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
