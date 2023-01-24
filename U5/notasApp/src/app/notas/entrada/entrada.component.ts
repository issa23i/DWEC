import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {

  private _nota: any = '';
  private _alumno: any = '';
  
  constructor (private servicio: ServicioService){}

  public addNota (){
    if(this._nota !== '' && this._alumno !== ''){
      let obj_nota = {nota: this._nota, alumno: this._alumno}
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

  
  public get alumno(): any {
    return this._alumno;
  }
  public set alumno(value: any) {
    this._alumno = value;
  }

}
