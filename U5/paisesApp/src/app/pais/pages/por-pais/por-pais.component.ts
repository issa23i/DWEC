import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  private _paises: Pais[] = [];
  

  private _termino: string = '';
  private _hayError: boolean = false;
  

  constructor(private paisServ : PaisService){}

  buscar(): void {
    if ( this._termino !== '') {
      this._hayError = false;
      this.paisServ.buscarPais(this._termino)
        .subscribe({
          next: (resp) => {
            this.paises = resp
            //console.log(resp)
          },
          error: (err) => {
            this._hayError = true
            this._paises = []
            console.log("ERROR " + err)
          }
        })
      this._termino = '';
    }
  }

  public get paises(): Pais[] {
    return this._paises;
  }
  public set paises(value: Pais[]) {
    this._paises = value;
  }

  public get termino(): string {
    return this._termino;
  }
  public set termino(value: string) {
    this._termino = value;
  }

  public get hayError(): boolean {
    return this._hayError;
  }
  public set hayError(value: boolean) {
    this._hayError = value;
  }
}
