import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class TerminarTrabajoComponent implements OnInit {

  constructor(private fichajeService: FichajeService) { }

  @Input() fichaje?: Fichaje
  @Output() outputEmitter = new EventEmitter<boolean>()
  horaSalida?: string

  ngOnInit() {
    if ( this.fichaje ) {
      const date = new Date(this.fichaje?.FechaHoraEntrada)
      this.horaSalida = this.fichajeService.formatDate( date )
    }
  }

  cerrarFichaje() {
    if ( this.fichaje )
    this.fichajeService.cerrarFichaje(this.fichaje)
    this.outputEmitter.emit(true)

  }


}
