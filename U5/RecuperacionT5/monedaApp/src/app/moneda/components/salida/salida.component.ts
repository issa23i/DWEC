import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent {

  private _hayPaises: boolean = false;
  constructor(private servAPI : ApiService){

  }
  get paises(){
    if(this.servAPI.paises.length>0){
      this._hayPaises=true
    } 
    return this.servAPI.paises
  }
  
  public get hayPaises(): boolean {
    return this._hayPaises;
  }
  public set hayPaises(value: boolean) {
    this._hayPaises = value;
  }
}
