import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  
  private _valor: string = '';

  constructor(private gifsService: GifsService) {} //crea la propiedad en el constructor

  ngOnInit(): void {}

  buscar(): void {
    if (this._valor !== '') {
      this.gifsService.historial.push(this._valor);
      this.gifsService.buscarGifs(this._valor);
      this._valor = '';
      console.log(this.gifsService.historial)
    }
  }

  public get valor(): string {
    return this._valor;
  }
  public set valor(value: string) {
    this._valor = value;
  }
}
