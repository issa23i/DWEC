import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  fecha: Date = new Date(1988, 3, 15, 12, 30, 15); //15 de Abril del 1988 12:30:15
}
