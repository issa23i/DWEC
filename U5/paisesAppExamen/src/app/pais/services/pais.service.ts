import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pais } from '../interfaces/pais';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = environment.apiUrl;

  get httpParams () {
    //indicamos los parámetros que queremos que nos devuelva la petición
    //depende de como funcione la API
    return new HttpParams().set( 'fields', 'name,capital,cioc,flags,population,translations,cca2' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    console.log("URL:"+url);
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  
  getPaisPorAlpha( id: string ):Observable<Pais>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    console.log("URL:"+url);
    return this.http.get<Pais>( url );
  }

 

}
