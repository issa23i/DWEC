import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  private _notas: string[] = [];

  constructor() { }

  public get notas(): string[] {
    return this._notas;
  }
  public set notas(value: string[]) {
    this._notas = value;
  }

}
