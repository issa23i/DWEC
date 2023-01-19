import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  private _tareas: string[] = [];
  constructor(private servicioTareas: TareasService) {}
  public get tareas():string[] {
    return this._tareas;
  }///// por aqui
}
