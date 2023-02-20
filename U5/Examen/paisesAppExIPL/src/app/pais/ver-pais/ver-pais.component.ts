import { Component, OnInit } from '@angular/core';
import { Pais } from '../interfaces/pais';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!: Pais; //con ! nos deja crear la variable sin tener que inicializarla

  constructor(
  ) {}

  ngOnInit(): void {
    //cuando se active esta ruta
    
  }
}

