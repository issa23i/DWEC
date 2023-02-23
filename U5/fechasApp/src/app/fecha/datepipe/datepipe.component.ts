import { Component} from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent {
  numero : number = 4.7
  frase : string = 'Cuatro patas tiene un gato'
  fecha: Date = new Date(1988, 3, 15, 12, 30, 15, 46); //15 de Abril del 1988 12:30:15
}
