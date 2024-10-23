import { Component } from '@angular/core';
import { FichajeService } from '../services/fichaje.service';
import { Fichaje } from '../interfaces/fichaje';

@Component({
  selector: 'app-Registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss']
})
export class RegistroPage {

  lastFichaje?: Fichaje
  working: boolean = false

  constructor(private fichajeService: FichajeService) {
    this.fichajeService.getLastFichaje(1).subscribe(fichaje => {
      this.lastFichaje = fichaje
      const now = new Date();
      const startTime = new Date(this.lastFichaje.FechaHoraEntrada);
      const hourDiff = (now.getTime() - startTime.getTime()) / 1000 / 60 / 60
      
      console.log(this.lastFichaje);
      
      if ( hourDiff < 12 && this.lastFichaje.FechaHoraSalida == null ) {
        this.working = true
      } else {
        this.working = false
      }
    })
  }
}
