import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  private _resultados: Gif[] = [];

  constructor( private gifsService: GifsService ) { }
  
  ngOnInit(): void {
    this._resultados = this.gifsService.resultados
     }
    
    
  public get resultados(): Gif[] {
    return this._resultados;
  }
  public set resultados(value: Gif[]) {
    this._resultados = value;
  }
}
