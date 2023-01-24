import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit{

  private _notas: any[] = [];

  constructor(private servicio: ServicioService){ }

  ngOnInit(): void {
    this._notas = this.servicio.notas
  }

  public borrarNota (nota: any){
    this.notas = this.notas.filter(el => el!== nota)
  }

  public get notas(): any[] {
    return this._notas;
  }
  public set notas(value: any[]) {
    this._notas = value;
  }
}
