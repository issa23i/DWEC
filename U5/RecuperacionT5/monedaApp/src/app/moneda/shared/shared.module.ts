import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
