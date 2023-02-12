import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private infoPaginaService:InfoPaginaService){}
  get info(){
    return this.infoPaginaService.infoPagina
  }
}
