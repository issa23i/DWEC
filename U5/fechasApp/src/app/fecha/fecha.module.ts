import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';



@NgModule({
  declarations: [
    PipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeComponent
  ]
})
export class FechaModule { }
