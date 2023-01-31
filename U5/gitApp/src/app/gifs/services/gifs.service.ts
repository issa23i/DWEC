import { Injectable } from '@angular/core';
import { Gif } from '../interfaces/gifs';
import { HttpClientModule, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  /** LocalStorage
      Para no perder información (historial e imágenes de resultados) al refrescar usaremos
      LocalStorage en gifs.service.ts 
    */

  /**
   * Dentro del servicio:
      • Variable para guardar las búsquedas.
      • Variable para guardar los resultados.
      • Método para realizar búsquedas y limitar a 10 elementos únicos (sin importar mayúsculas
          o minúsculas). Usaremos HttpClient para implementar el uso de la API (también se podría
          hacer con fetch)
   */
  private apiKey: string = 'DjNFYau3pbGLWJ2BlxVtdFHiNiMHA5Vu';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'; //URL
  private _historial: string[] = []; //Guarda el historial de búsquedas
  public resultados: Gif[] = []; //Hacemos uso de la interfaz Gif

  gethistorial() {}

  constructor(private http: HttpClientModule) {}
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
