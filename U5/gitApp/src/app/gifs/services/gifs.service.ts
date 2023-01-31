import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'DjNFYau3pbGLWJ2BlxVtdFHiNiMHA5Vu';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'; //URL
  private _historial: string[] = []; //Guarda el historial de búsquedas
  public resultados: Gif[] = []; //Hacemos uso de la interfaz Gif

  gethistorial() {}

  constructor(private http: HttpClient) {}
  buscarGifs(query: string = '') {}
  /*
fetch
("https://api.giphy.com/v1/gifs/search?api_key=LsRGOaQxDIOkxXYmt1v8yQx7fm
IiqkSs&q=perro&limit=10")
.then(resp=>{
resp.json()
.then(data=>{
console.log(data);
})
})
*/
  //Creamos un objeto para los parámetros de llamada a la API
  /** 
const params = new HttpParams()
.set('api_key', this.apiKey)
.set('limit', '10')
.set('q', query );
this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, {
params } )//SearchGifsResponse se obtiene de la interfaz
.subscribe( ( resp ) => {//resp es un Observable, con más
funcionalidades que las Promesas
this.resultados = resp.data;
});
}*/
}
