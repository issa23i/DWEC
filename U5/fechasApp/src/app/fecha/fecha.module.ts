import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';
import { DatepipeComponent } from './datepipe/datepipe.component';



@NgModule({
  declarations: [
    PipeComponent,
    DatepipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeComponent,
    DatepipeComponent
  ]
})
export class FechaModule { }
