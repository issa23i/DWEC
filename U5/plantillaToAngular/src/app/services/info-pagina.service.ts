import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private _infoPagina: InfoPagina = {};
  

  constructor(private http: HttpClient) {
    this.http.get<InfoPagina>('assets/info.json')
      .pipe(
        catchError(this.handleError<any>('getInfo'))
      )
      .subscribe(resp => {
        this.infoPagina = resp
      });
    }

    
    // manejo de errores
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    
    public get infoPagina(): InfoPagina {
      return this._infoPagina;
    }
    public set infoPagina(value: InfoPagina) {
      this._infoPagina = value;
    }
}
