import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs';
import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { ResultadosComponent } from '../resultados/resultados.component';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  /** LocalStorage
      Para no perder información (historial e imágenes de resultados) al refrescar usaremos
      LocalStorage en gifs.service.ts 
    */

  
  private apiKey: string = 'DjNFYau3pbGLWJ2BlxVtdFHiNiMHA5Vu';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'; //URL
  private _historial: string[] = []; // historial de búsquedas • Variable para guardar los resultados.
  
  public resultados: Gif[] = []; // interfaz Gif • Variable para guardar las búsquedas.


  constructor(private http: HttpClient) {}
  

  /**
      • Método para realizar búsquedas y limitar a 10 elementos únicos (sin importar mayúsculas
          o minúsculas). Usaremos HttpClient para implementar el uso de la API (también se podría
          hacer con fetch)
   */
  buscarGifs(query: string = '') {
    //Creamos un objeto para los parámetros de llamada a la API
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params,}) //SearchGifsResponse se obtiene de la interfaz
      .subscribe((resp) => {
        this.resultados = resp.data;
        console.log(this.resultados )
      });
  }

  public get historial(): string[] {
    return this._historial;
  }
  public set historial(value: string[]) {
    this._historial = value;
  }
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
}
