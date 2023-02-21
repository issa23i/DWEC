import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Pais; //con ! nos deja crear la variable sin tener que inicializarla

  constructor(
    private paisService: PaisService, private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    //cuando se active esta ruta
    this.route.params.subscribe({
      next: (params) => {
        this.paisService.getPaisPorAlpha(params['id']).subscribe({
          next: (pais: any) => {
            this.pais = pais[0];
            console.log(pais[0].name)
          },
          error: (error) => {
            console.error('Hubo un problema : ',error);
          }
        })
      }
    })
  }
}
