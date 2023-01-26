import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private _employees: any[] = [];


  constructor(private empleadosServicio : EmpleadosService){}


  ngOnInit(): void {
    this._employees = this.empleadosServicio.employees;
  }
  
  public get employees(): any[] {
    return this._employees;
  }
  public set employees(value: any[]) {
    this._employees = value;
  }
}
