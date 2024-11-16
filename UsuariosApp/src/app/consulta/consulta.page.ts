import { Component, OnInit } from '@angular/core';
import { Fichaje } from '../interfaces/fichaje';
import { FichajeService } from '../services/fichaje.service';

@Component({
  selector: 'app-Consulta',
  templateUrl: 'consulta.page.html',
  styleUrls: ['consulta.page.scss']
})
export class ConsultaPage implements OnInit {

  fichajes: Fichaje[] = []
  userID?: any = null

  constructor( private fichajeService: FichajeService ) {}

  ngOnInit() {
    this.reloadFichajes();
  }

  reloadFichajes() {
    this.userID = JSON.parse(sessionStorage.getItem("userID")!)
    
    this.fichajeService.getUserFichajes(this.userID).subscribe( res => {
      this.fichajes = res.filter(fichaje => {
        const now = new Date();
        const fichajeDate = new Date(fichaje.FechaHoraEntrada);
        const hourDiff = (now.getTime() - fichajeDate.getTime()) / 1000 / 60 / 60

        return !((Math.abs(hourDiff)) > 24);
      })
    })
  }

}
