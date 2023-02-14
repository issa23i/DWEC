import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiembroEquipo } from '../interfaces/miembro-equipo';

@Injectable({
  providedIn: 'root',
})
export class MiembroEquipoService {
  private _equipos: MiembroEquipo[] = [];
  
  private _cargada: boolean = false;
  

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<MiembroEquipo[]>(
        'https://plantillatoangular-default-rtdb.europe-west1.firebasedatabase.app/Equipo.json'
      )
      .subscribe({
        next: (resp: MiembroEquipo[]) => {
          this._cargada = true
          this._equipos = resp;
          console.log(this._equipos)
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  public get equipos(): MiembroEquipo[] {
    return this._equipos;
  }
  public set equipos(value: MiembroEquipo[]) {
    this._equipos = value;
  }
  public get cargada(): boolean {
    return this._cargada;
  }
  public set cargada(value: boolean) {
    this._cargada = value;
  }
}
