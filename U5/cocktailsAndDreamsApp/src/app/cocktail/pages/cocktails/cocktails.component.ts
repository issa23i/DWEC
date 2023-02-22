import { Component } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent {
  private _termino: string = '';
  
  
  constructor(private servicio: CocktailService){}
  

  buscar(){
    this.servicio.buscarPorNombre(this.termino)
    this._termino = ''
  }

  public get termino(): string {
    return this._termino;
  }
  public set termino(value: string) {
    this._termino = value;
  }
}
