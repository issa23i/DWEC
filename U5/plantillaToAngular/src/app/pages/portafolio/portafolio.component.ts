import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
constructor(private productoService : ProductoService){}
get cargando(){
  return this.productoService.cargando
}
get productosIdx(){
  return this.productoService.productosIdx
}
}
