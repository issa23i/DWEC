import { Component } from '@angular/core';
import { MiembroEquipoService } from '../../services/miembro-equipo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private miembroEquipo: MiembroEquipoService){}
  get equipos(){
    //console.log(this.miembroEquipo.equipo)
    return this.miembroEquipo.equipos
  }
}
