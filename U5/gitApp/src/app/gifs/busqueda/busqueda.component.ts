import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent  {
  
  private _valor: string = '';

  constructor(private gifsService: GifsService) {} //crea la propiedad en el constructor

  buscar(): void {
    if (this._valor !== '') {
      // las búsquedas serán mostradas en el sidebar
      this.gifsService.historial.push(this._valor);
      // El servicio busca en la API los Gifs
      this.gifsService.buscarGifs(this._valor)
      // guardar en el navegador las búsquedas
      localStorage.setItem('busqueda',this._valor)
      // Borra el texto de búsqueda introducido por el usuario
      this._valor = '';
    }
  }

  public get valor(): string {
    return this._valor;
  }
  public set valor(value: string) {
    this._valor = value;
  }
}
