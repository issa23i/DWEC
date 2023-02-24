import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {


  constructor(private activateRoute: ActivatedRoute, private servicio : ApiService){

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( (parametros) => {
      console.log(parametros)
      this.servicio.buscarPorAlpha(parametros['id'])
    })
  }
  get pais(){
    return this.servicio.pais
  }
}
