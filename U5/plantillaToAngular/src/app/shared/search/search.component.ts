import { Component } from '@angular/core';
import { ProductosIdx } from 'src/app/interfaces/productoIdx';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private router: Router){}

  buscarProducto(termino: string){
    this.router.navigate(['/search/', termino])
  }

}
