import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cocktail, Drink } from '../interfaces/cocktail';
@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private _resultadoBusqueda: Cocktail = {
    drinks: []
  };

  private _drink: Drink = {
    idDrink: '',
    strDrink: '',
    strDrinkAlternate: null,
    strTags: '',
    strVideo: null,
    strCategory: '',
    strIBA: '',
    strAlcoholic: '',
    strGlass: '',
    strInstructions: '',
    strInstructionsES: null,
    strInstructionsDE: null,
    strInstructionsFR: null,
    strInstructionsIT: null,
    strInstructionsZH_HANS: null,
    strInstructionsZH_HANT: null,
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: null,
    strIngredient3: null,
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: null,
    strMeasure2: null,
    strMeasure3: null,
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: '',
    strImageAttribution: '',
    strCreativeCommonsConfirmed: '',
    dateModified: ''
  }
  
  
  private _drinks: any[] = [];
  
  private baseUrl : string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  private search : string = 'search.php?'
  private id: string = 'lookup.php?'

  
  constructor(private http : HttpClient) { }


  buscarPorId(id : string = ''){
    const params = new HttpParams()
      .set('i',id)

    this.http.get<Cocktail>(`${this.baseUrl}${this.id}`,{params})
    .subscribe({
      next: (response) => {
        this._resultadoBusqueda = response
        console.log(response)
        console.log(response.drinks[0])
        this._drink =  response.drinks[0]
      }
    })
  }

  buscarPorNombre(termino : string = ''){
    const params = new HttpParams()
      .set('s', termino);

    this.http.get<Cocktail>(`${this.baseUrl}${this.search}`,{params})
    .subscribe({
      next: (resp: Cocktail) => {
        console.log(resp);
        this._resultadoBusqueda = resp
        console.log(resp.drinks)
        this._drinks = resp.drinks
      },
      error: (err: Error) => {
        console.log(err);
      }
    })
  }
  public get drinks(): any[] {
    return this._drinks;
  }
  public set drinks(value: any[]) {
    this._drinks = value;
  }
  public get resultadoBusqueda(): Cocktail {
    return this._resultadoBusqueda;
  }
  public set resultadoBusqueda(value: Cocktail) {
    this._resultadoBusqueda = value;
  }
  public get drink(): Drink {
    return this._drink;
  }
  public set drink(value: Drink) {
    this._drink = value;
  }
}
