import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit{
  
  private _id: string = '';
  

  constructor(private activateRoute: ActivatedRoute,
    private service: CocktailService){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      console.log(param['id'])
      this._id = param['id']
    }) 
    this.service.buscarPorId(this._id)
    
  }

  get bebida(){
    return this.service.drink
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

}
