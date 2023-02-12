import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private _infoPagina: InfoPagina = {};
  

  constructor(private http: HttpClient) {
    console.log('Servicio InfoPagina');
    this.http.get('assets/info.json')
    .subscribe((resp: any) => {
      this.infoPagina = resp
      console.log(this.infoPagina['twitter']);
    },
    (err) => {
      console.error('Ocurrió un erro al acceder a la información ', err)
    });
    }

    public get infoPagina(): InfoPagina {
      return this._infoPagina;
    }
    public set infoPagina(value: InfoPagina) {
      this._infoPagina = value;
    }
}
