import { Component } from '@angular/core';
import { Pais } from '../interfaces/pais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar() {
    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp: Pais[]) => {
        this.paises = resp;
        console.log(resp);
      },
      error: (err) => {
        console.error('Error');
      },
    });
  }
}
