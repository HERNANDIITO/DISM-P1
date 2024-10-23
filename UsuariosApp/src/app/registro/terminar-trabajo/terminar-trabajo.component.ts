import { Component, Input, OnInit } from '@angular/core';
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

    this.fichaje.FechaHoraSalida = new Date().toISOString().slice(0, 19).replace('T', ' ');

    this.fichajeService.updateFichaje(this.fichaje).subscribe( res => {console.log(res);} )
    
    
  }

}
