import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  get httpParams () {
    //indicamos los parámetros que queremos que nos devuelva la petición
    //depende de como funcione la API
    return new HttpParams().set( 'fields',
    'name,capital,cioc,flags,population' );
    }
  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarCapital ( termino: string):Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${ termino }`
    return this.http.get<Pais[]>(url, {params: this.httpParams})
  }

  buscarRegion ( termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/region/${ termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams})
  }
  
  getPaisPorAlpha ( id: string):Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${ id}`
    return this.http.get<Pais>(url, {params : this.httpParams})
  }
}
