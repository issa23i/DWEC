import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent {

  constructor(private servicio: ApiService){

  }

  private _termino: string = "";
  

 buscar(){

  if(this._termino!==''){
    console.log(this._termino)
    this.servicio.buscar(this._termino)
  }
  this._termino = ''
 }
 

 public get termino(): string {
  return this._termino;
}
public set termino(value: string) {
  this._termino = value;
}
 

}
