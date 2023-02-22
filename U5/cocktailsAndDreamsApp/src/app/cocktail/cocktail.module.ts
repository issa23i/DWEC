import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CocktailsComponent,
    CocktailComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CocktailComponent,
    CocktailsComponent,
    TablaComponent
  ]
})
export class CocktailModule { }
