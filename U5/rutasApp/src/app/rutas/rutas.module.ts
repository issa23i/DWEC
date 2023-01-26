import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'employe',
    component: EmployeComponent,
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
  
]

@NgModule({
  declarations: [
    AboutComponent,
    EmployeComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent
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
    NavbarComponent,
    RouterModule
  ]
})
export class RutasModule { }
