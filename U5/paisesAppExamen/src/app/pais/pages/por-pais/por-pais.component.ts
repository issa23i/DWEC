import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  paises: Pais[] = [];
  hayPaises: boolean = false
  
  
  constructor(private paisService: PaisService) { }

  buscar() {
    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp: Pais[]) => {
        this.paises = resp
        this.paises.length>0 ? this.hayPaises=true : this.hayPaises= false
      },
      error: (err) => {
        console.error('Hubo un error : ', err)
      }
    })
  }

}