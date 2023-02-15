import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/productoIdx';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private _productosIdx: ProductosIdx[] = [];

  private _cargando: boolean = true;

  private _productosFiltrado: ProductosIdx[] = [];

  private _termino: string = '';
  

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<ProductosIdx[]>(
        'https://plantillatoangular-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
      )
      .subscribe({
        next: (resp: ProductosIdx[]) => {
          this._cargando = false;
          this._productosIdx = resp;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  getProducto(id: string) {
    return this.httpClient.get(
      `https://plantillatoangular-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`
    );
  }

  cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.httpClient
        .get<ProductosIdx[]>(
          'https://plantillatoangular-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
        )
        .subscribe((resp: ProductosIdx[]) => {
          this.productosIdx = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  buscarProducto(termino: string) {
    this._termino = termino;
    if (this.productosIdx.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(termino);
    }
  }

  
  private filtrarProductos(termino: string) {
    this._productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productosIdx.forEach((prod) => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this._productosFiltrado.push(prod);
      }
    });
  }

  
  public get productosFiltrado(): ProductosIdx[] {
    return this._productosFiltrado;
  }
  public set productosFiltrado(value: ProductosIdx[]) {
    this._productosFiltrado = value;
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
  public get termino_1(): string {
    return this._termino;
  }
  public set termino_1(value: string) {
    this._termino = value;
  }
}
