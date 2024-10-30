import { Component } from '@angular/core';
import { FichajeService } from '../services/fichaje.service';
import { Fichaje } from '../interfaces/fichaje';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-Registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss']
})
export class RegistroPage {

  lastFichaje?: Fichaje
  working: boolean = false
  userID?: number
  users?: Usuario[]

  constructor(private fichajeService: FichajeService, private usuarioService: UsuarioService) {

    this.userID = JSON.parse(sessionStorage.getItem("userID")!)

    if ( !this.userID ) { 
      this.usuarioService.getAllUsers().subscribe( res => {
        this.users = res;
      })
    }
  }

  publishUser() {
    if ( this.userID )
    sessionStorage.setItem( 'userID', this.userID.toString() )
  }

  empezarTrabajo() {
    this.fichajeService.getLastFichaje(this.userID!).subscribe(fichaje => {
      this.lastFichaje = fichaje
      const now = new Date();
      const startTime = new Date(this.lastFichaje.FechaHoraEntrada);
      const hourDiff = (now.getTime() - startTime.getTime()) / 1000 / 60 / 60
      
      console.log( console.log("last fichaje", this.lastFichaje ) );
      
      if ( hourDiff < 12 && this.lastFichaje.FechaHoraSalida == null || this.lastFichaje.FechaHoraSalida == "" ) {
        this.working = true
      } else {
        if ( hourDiff > 12 ) { this.fichajeService.cerrarFichaje(this.lastFichaje) }
        this.working = false
      }

      console.log("working...", this.working);
      console.log("hourDiff...", hourDiff);
    })
  }
  
}