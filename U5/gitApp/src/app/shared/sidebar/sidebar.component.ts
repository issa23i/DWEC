import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  /**
   * Desde el sidebar:
      • Colocar los diferentes elementos del historial
      • Si pulso en un elemento del sidebar vuelvo a mostrar esa búsqueda
   */
  
  gethistorial() {
    return this.gifsService.historial
  }
  constructor( private gifsService: GifsService ) { }
  
  buscar( termino: string ) {
    
    if (termino !== '') {

      this.gifsService.buscarGifs(termino);
    }
  }

  }