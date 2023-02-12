import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {
    console.log('Servicio InfoPagina');
    this.http.get('assets/info.json')
    .subscribe((resp: any) => {
      console.log(resp['twitter']);
      
    },
    (err) => {
      console.error('Ocurrió un erro al acceder a la información ', err)
    });
    }
}
