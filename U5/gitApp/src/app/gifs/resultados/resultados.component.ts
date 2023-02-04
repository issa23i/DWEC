import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  

  constructor( private gifsService: GifsService ) {  //this._resultados = this.gifsService.resultados
  }
  
  get resultados() {
    return this.gifsService.resultados
  }

  
}
