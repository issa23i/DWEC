import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  private _notas: any[] = [];

  constructor() { }

  public get notas(): any[] {
    return this._notas;
  }
  public set notas(value: any[]) {
    this._notas = value;
  }

}
