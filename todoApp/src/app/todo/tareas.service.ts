import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private _tareas: string[] = [];
  public get tareas(): string[] {
    return this._tareas;
  }
  public set tareas(value: string[]) {
    this._tareas = value;
  }
  constructor() {}
}
