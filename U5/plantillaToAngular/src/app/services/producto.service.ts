import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/productoIdx';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _productosIdx: ProductosIdx[] = [];
  
  private _cargando: boolean = true;
  

  constructor(private httpClient: HttpClient) { 
    this.httpClient
    .get<ProductosIdx[]>('https://plantillatoangular-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
    )
    .subscribe({
      next: (resp: ProductosIdx[]) => {
        this._cargando = false
        this._productosIdx = resp
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
  public get productosIdx(): ProductosIdx[] {
    return this._productosIdx;
  }
  public set productosIdx(value: ProductosIdx[]) {
    this._productosIdx = value;
  }
  public get cargando(): boolean {
    return this._cargando;
  }
  public set cargando(value: boolean) {
    this._cargando = value;
  }
}
