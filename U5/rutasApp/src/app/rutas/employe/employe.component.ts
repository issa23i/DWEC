import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit{

  private _employe: any = {};

  constructor(private route : ActivatedRoute, private servicioEmpleados : EmpleadosService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      let id = params.get('id')
      this._employe = this.servicioEmpleados.employees.find( (empleado) => empleado.id === id)
    })
  }

  public get employe(): any {
    return this._employe;
  }
  public set employe(value: any) {
    this._employe = value;
  }

}
