import { Component, Input, OnInit, Output } from '@angular/core';
import { Fichaje } from 'src/app/interfaces/fichaje';
import { FichajeService } from 'src/app/services/fichaje.service';

@Component({
  selector: 'app-terminar-trabajo',
  templateUrl: './terminar-trabajo.component.html',
  styleUrls: [
    './terminar-trabajo.component.scss',
    '../registro.page.scss'
  ],
})
export class TerminarTrabajoComponent  implements OnInit {

  constructor(private fichajeService: FichajeService) { }

  @Input() fichaje?: Fichaje

  ngOnInit() {}

  cerrarFichaje() {
    if (!this.fichaje) { return }

    this.fichaje.FechaHoraSalida = new Date().toString();

    this.fichaje.IdFichaje = this.fichaje.IdFichaje.toString()
    this.fichaje.IdTrabajo = this.fichaje.IdTrabajo.toString()
    this.fichaje.IdUsuario = this.fichaje.IdUsuario.toString()
    

    this.fichajeService.updateFichaje(this.fichaje).subscribe( res => { window.location.reload() } )
    
  }

}
