import { Component } from '@angular/core';
import { Pais, Region } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  private _paises: Pais[] = [];
  private _termino : string = '';
  private _regiones: Region[] = Object.values(Region);
  
  
  
  constructor(private paisServ : PaisService){}

  buscar(): void {
    if ( this._termino !== '') {
      this.paisServ.buscarRegion(this._termino)
          .subscribe({
            next: (resp) => {
              this.paisServ.paises = resp
              this._paises = resp
              console.log(resp)
            },
            error: (err) => {
              this.paisServ.paises = []
              this._paises = []
              console.log("ERROR" +   err)
            }
          })
          this._termino = ''
    }
  }

  public get paises(): Pais[] {
    return this._paises;
  }
  public set paises(value: Pais[]) {
    this._paises = value;
  }
  public get regiones(): Region[] {
    return this._regiones;
  }
  public set regiones(value: Region[]) {
    this._regiones = value;
  }
}
