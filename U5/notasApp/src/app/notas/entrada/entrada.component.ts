import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {

  private _nota: string = '';
  
  constructor (private servicio: ServicioService){}

  public addNota (){
    if(this._nota !== ''){
      this.servicio.notas.push(this._nota)
      this._nota = ''
    }
  }

  public get nota(): string {
    return this._nota;
  }
  public set nota(value: string) {
    this._nota = value;
  }

}
