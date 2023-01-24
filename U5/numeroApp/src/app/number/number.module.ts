import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiComponent } from './pi/pi.component';



@NgModule({
  declarations: [
    PiComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PiComponent
  ]
})
export class NumberModule { }
