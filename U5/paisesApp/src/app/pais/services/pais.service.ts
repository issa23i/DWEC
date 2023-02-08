import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = environment.apiUrl
  private _paises: Pais[] = [];
 
  

  get httpParams () {
    //indicamos los parámetros que queremos que nos devuelva la petición
    //depende de como funcione la API
    return new HttpParams().set( 'fields',
    'name,capital,cioc,flags,population' );
    }


  constructor(private http: HttpClient) { }


  buscarPais( termino: string ): Observable<Pais[]> {
    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarCapital ( termino: string):Observable<Pais[]>{
    const url = `${this._apiUrl}/capital/${ termino }`
    return this.http.get<Pais[]>(url, {params: this.httpParams})
  }

  buscarRegion ( termino: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/region/${ termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams})
  }
  
  getPaisPorAlpha ( id: string):Observable<Pais>{
    const url = `${this._apiUrl}/alpha/${ id}`
    return this.http.get<Pais>(url, {params : this.httpParams})
  }

  public get paises(): Pais[] {
    return this._paises;
  }
  public set paises(value: Pais[]) {
    this._paises = value;
  }

}
