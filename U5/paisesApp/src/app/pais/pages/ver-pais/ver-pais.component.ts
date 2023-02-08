import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  private _pais!: Pais;
  private _existe: Boolean = false;
  

  private _alpha2Code: string = '';


  constructor(
    private paisService : PaisService
    , private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({alpha2Code}) => {
                this._alpha2Code = alpha2Code
                this._pais.alpha2Code = alpha2Code})
    this.paisService.getPaisPorAlpha(this._alpha2Code)
      .subscribe( pais => {
        this._pais = pais
        this._existe = true
      })
  }

  public get pais(): Pais {
    return this._pais;
  }
  public set pais(value: Pais) {
    this._pais = value;
  }

  public get existe(): Boolean {
    return this._existe;
  }
  public set existe(value: Boolean) {
    this._existe = value;
  }
}
