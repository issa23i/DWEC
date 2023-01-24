import { Component } from '@angular/core';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.css']
})
export class PiComponent {
  pi: number = 3.141592;
}
