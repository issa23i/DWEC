import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {
  @Input() termino! : string ;
  @Input() buscar!: () => void;
  constructor(private paisServ : PaisService){}
}
