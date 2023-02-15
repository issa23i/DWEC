import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductosIdx } from '../../interfaces/productoIdx';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  private _id: string = '';
  
  private _producto: Producto= {};
  

  constructor(private activatedRoute : ActivatedRoute,
            private productoService : ProductoService){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (parametros) => {
      this.id = parametros['id']
      this.productoService.getProducto(this.id).subscribe( (resp) => {
        this.producto = resp
      })
    })
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get producto(): Producto {
    return this._producto;
  }
  public set producto(value: Producto) {
    this._producto = value;
  }
}
