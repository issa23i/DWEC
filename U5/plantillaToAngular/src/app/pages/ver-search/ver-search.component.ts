import { Component, OnInit } from '@angular/core';
import { ProductosIdx } from 'src/app/interfaces/productoIdx';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-search',
  templateUrl: './ver-search.component.html',
  styleUrls: ['./ver-search.component.css']
})
export class VerSearchComponent implements OnInit{

  private _filtrados: ProductosIdx[] = [];
  private _cargando: boolean = false;
  
  private _termino: string = '';
  

  constructor(private productoService : ProductoService,
              private activatedRoute: ActivatedRoute){
                
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (parametro) => {
      this._termino = parametro['termino']
      this.buscarProducto(this._termino)
      
      this._cargando = this.productoService.cargando
    })
  }

  buscarProducto(termino: string){
    this.productoService.cargarProductos().then( () => {
      this.productoService.buscarProducto(termino)
      this._filtrados = this.productoService.productosFiltrado
    })
     }

  public get termino(): string {
    return this._termino;
  }
  public set termino(value: string) {
    this._termino = value;
  }
  public get filtrados(): ProductosIdx[] {
    return this._filtrados;
  }
  public set filtrados(value: ProductosIdx[]) {
    this._filtrados = value;
  }
  public get cargando(): boolean {
    return this._cargando;
  }
  public set cargando(value: boolean) {
    this._cargando = value;
  }
}
