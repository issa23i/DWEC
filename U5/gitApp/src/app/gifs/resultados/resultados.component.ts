import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  //private _resultados: Gif[] = [];

  constructor( private gifsService: GifsService ) {  //this._resultados = this.gifsService.resultados
  }
  
 
  ngOnInit(): void {
   
     }
     get resultados() {
      return this.gifsService.resultados
    }
    
  
}
