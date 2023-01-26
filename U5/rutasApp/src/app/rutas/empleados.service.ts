import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private _employees: any[] = [
    {
      id: 0,
      isActive: false,
      age: 39,
      name: {
        first: 'Patsy',
        last: 'Moore',
      },
      company: 'ZYTREX',
      email: 'patsy.moore@zytrex.net',
      favoriteFruit: 'strawberry',
    },
    {
      id: 1,
      isActive: true,
      age: 37,
      name: {
        first: 'Valencia',
        last: 'Flores',
      },
      company: 'AQUAMATE',
      email: 'valencia.flores@aquamate.us',
      favoriteFruit: 'banana',
    },
    {
      id: 2,
      isActive: false,
      age: 37,
      name: {
        first: 'Leona',
        last: 'Wyatt',
      },
      company: 'SENMAO',
      email: 'leona.wyatt@senmao.io',
      favoriteFruit: 'apple',
    },
  ];

  constructor() {}

  
  public get employees(): any[] {
    return this._employees;
  }
  public set employees(value: any[]) {
    this._employees = value;
  }
}
