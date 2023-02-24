import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  private _pais!: Pais;
  public get pais_1(): Pais {
    return this._pais;
  }
  public set pais_1(value: Pais) {
    this._pais = value;
  }

  constructor(private servicio: ApiService) {}
  ngOnInit(): void {
    this._pais = this.servicio.pais
  }
  get pais(){
    this._pais = this.servicio.pais
    return this.servicio.pais
  }
}
