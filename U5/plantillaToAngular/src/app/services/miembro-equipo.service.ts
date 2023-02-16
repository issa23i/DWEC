import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiembroEquipo } from '../interfaces/miembro-equipo';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MiembroEquipoService {
  private _equipos: MiembroEquipo[] = [];
  
  private _cargada: boolean = false;
  

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<MiembroEquipo[]>(
        `${environment.baseUrl}/Equipo.json`
      )
      .subscribe({
        next: (resp: MiembroEquipo[]) => {
          this._cargada = true
          this._equipos = resp;
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
