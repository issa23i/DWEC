import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent {

  private _pais: boolean = false;


  constructor(private paisService : PaisService){}

  


  public get pais(): boolean {
    return this._pais;
  }
  public set pais(value: boolean) {
    this._pais = value;
  }

}
