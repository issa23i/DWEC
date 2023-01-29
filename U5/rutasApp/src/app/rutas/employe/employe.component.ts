import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { Employe } from '../interfaces/employe';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit{

  private _employe: Employe = {
    id: '',
    name: {
      first: '',
      last: ''
    },
    company: '',
    email: ''
  }
 
  constructor(private activatedRoute : ActivatedRoute, private servicio : EmpleadosService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{this._employe.id = id });
    this._employe = this.servicio.employees.find( e => e.id == this._employe.id)

  }

  public get employe(): Employe {
    return this._employe;
  }
  public set employe(value: Employe) {
    this._employe = value;
  }

}
