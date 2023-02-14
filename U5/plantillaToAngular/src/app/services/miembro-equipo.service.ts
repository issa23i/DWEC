import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiembroEquipo } from '../interfaces/miembro-equipo';

@Injectable({
  providedIn: 'root',
})
export class MiembroEquipoService {
  private _equipo: MiembroEquipo[] = [];
  
  private _cargada: boolean = false;
  

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<MiembroEquipo[]>(
        'https://console.firebase.google.com/project/plantillatoangular/database/plantillatoangular-default-rtdb/data/~2F?hl=es-419'
      )
      .subscribe({
        next: (resp: MiembroEquipo[]) => {
          this._equipo = resp;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  public get equipo(): MiembroEquipo[] {
    return this._equipo;
  }
  public set equipo(value: MiembroEquipo[]) {
    this._equipo = value;
  }
  public get cargada(): boolean {
    return this._cargada;
  }
  public set cargada(value: boolean) {
    this._cargada = value;
  }
}
