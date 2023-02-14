import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private _infoPagina: InfoPagina = {};
  

  constructor(private http: HttpClient) {
    this.http.get<InfoPagina>('assets/info.json')
      .subscribe({
        next: (resp: InfoPagina) => {
          this.infoPagina = resp
        },
        error: (err) => {
          console.error(err)
        }
      });
    }
    
    public get infoPagina(): InfoPagina {
      return this._infoPagina;
    }
    public set infoPagina(value: InfoPagina) {
      this._infoPagina = value;
    }
}
