import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktail/pages/cocktails/cocktails.component';
import { CocktailComponent } from './cocktail/pages/cocktail/cocktail.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'cocktails/:id',
    component: CocktailComponent,
    pathMatch: 'full'
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
