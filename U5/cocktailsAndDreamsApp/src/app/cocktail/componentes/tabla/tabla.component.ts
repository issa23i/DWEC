import { Component, Input } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  
  constructor(private servicio:  CocktailService){}

  get bebidas(){
    return this.servicio.drinks
  }
}
