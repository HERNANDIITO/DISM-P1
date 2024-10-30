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

  ngOnInit(): void {
    console.log("userID", this.userID);
    console.log("fichajes", this.fichajes.length);
    
    this.userID = JSON.parse(sessionStorage.getItem("userID")!)
    
    this.fichajeService.getUserFichajes(this.userID).subscribe( res => {
      this.fichajes = res      
    })


  }

}
