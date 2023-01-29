import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit{

  private _employe: any;

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => { 
    })
  }

  public get employe(): any {
    return this._employe;
  }
  public set employe(value: any) {
    this._employe = value;
  }

}
