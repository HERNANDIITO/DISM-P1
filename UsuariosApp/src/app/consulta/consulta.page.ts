import { Component, Input, OnInit } from '@angular/core';
import { Fichaje } from '../interfaces/fichaje';
import { FichajeService } from '../services/fichaje.service';
import { Trabajo } from '../interfaces/trabajo';
import { TrabajoService } from '../services/trabajo.service';

@Component({
  selector: 'app-Consulta',
  templateUrl: 'Consulta.page.html',
  styleUrls: ['Consulta.page.scss']
})
export class ConsultaPage implements OnInit {

  fichajes: Fichaje[] = []
  userID = 1

  constructor(
    private fichajeService: FichajeService,
    private trabajoService: TrabajoService,
  ) {}

  ngOnInit(): void {
    if ( !this.userID ) { return; }

    this.fichajeService.getUserFichajes(this.userID).subscribe( res => {
      this.fichajes = res      
    })
  }

}
