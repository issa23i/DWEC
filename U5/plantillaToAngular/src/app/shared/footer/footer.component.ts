import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  constructor(private infoPaginaService:InfoPaginaService) {
  }
  get info(){
    return this.infoPaginaService.infoPagina
  }
}
