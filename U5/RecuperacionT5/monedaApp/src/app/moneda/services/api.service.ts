import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais';
import { HttpClient,  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseUrl: string = 'https://restcountries.com/v2/currency/'
  private _paises: Pais[] = [];
  private _pais!: Pais; 
  
  

  constructor(private httpClient: HttpClient) { 
    
  }

  buscar(termino: string = ''){
    const url = `${this._baseUrl}${termino}`
    
    this.httpClient.get<Pais[]>(url).subscribe({
      next: (resp : Pais[]) => {
        this._paises = resp
        console.log(this._paises)
      },
      error: (err) => {
        console.error('Hubo un error : ',err)
      }
    })
  }

  buscarPorAlpha(alpha:string = ''){

    this.httpClient.get<Pais>(`https://restcountries.com/v2/alpha/${alpha}`).subscribe({
      next: (resp : Pais) => {
        this._pais = resp
        console.log(this._pais)
      }
    })
  }

  public get paises(): Pais[] {
    return this._paises;
  }
  public set paises(value: Pais[]) {
    this._paises = value;
  }
  public get pais(): Pais {
    return this._pais;
  }
  public set pais(value: Pais) {
    this._pais = value;
  }
}
