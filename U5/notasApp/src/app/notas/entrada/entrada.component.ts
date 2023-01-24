import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {

  private _nota: any = '';
  private _nombre: any = '';
  
  constructor (private servicio: ServicioService){}

  public addNota (){
    if(this._nota !== '' && this._nombre !== ''){
      let obj_nota = {nota: this._nota, nombre: this._nombre}
      this.servicio.notas.push(obj_nota)
      this._nota = ''
    }
  }

  public get nota(): any {
    return this._nota;
  }
  public set nota(value: any) {
    this._nota = value;
  }

  
  public get nombre(): any {
    return this._nombre;
  }
  public set nombre(value: any) {
    this._nombre = value;
  }

}
