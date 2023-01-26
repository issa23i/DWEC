import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AboutComponent,
    EmployeComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutComponent,
    EmployeComponent,
    EmployeesComponent,
    HomeComponent,
    PostsComponent,
    NavbarComponent,
    RouterModule
  ]
})
export class RutasModule { }
