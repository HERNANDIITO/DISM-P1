import { Component, Input, OnInit } from '@angular/core';
import { Fichaje } from 'src/app/interfaces/fichaje';
import { Trabajo } from 'src/app/interfaces/trabajo';
import { TrabajoService } from 'src/app/services/trabajo.service';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro.component.html',
  styleUrls: [
    './registro.component.scss',
    '../consulta.page.scss'
  ],
})
export class RegistroComponent  implements OnInit {

  @Input() fichaje?: Fichaje;
  trabajo?: Trabajo
  horaEntrada?: string
  horaSalida?: string
  urlNominatin?: string
  location?: string
  
  constructor(private trabajoService: TrabajoService, private http: HttpClient) {}

  ngOnInit() {
    if ( !this.fichaje ) { return }

    this.trabajoService.getTrabajoByID(this.fichaje.IdTrabajo).subscribe( res => { this.trabajo = res } )

    this.horaEntrada = this.formatDate( new Date(this.fichaje.FechaHoraEntrada) )
    this.horaSalida = this.formatDate( new Date(this.fichaje.FechaHoraSalida) )

        //Obtengo Georeferenciación
        this.urlNominatin = 'https://nominatim.openstreetmap.org/reverse?format=json' + 
        '&lat=' + this.fichaje.GeolocalizacionLatitud +
        '&lon=' + this.fichaje.GeolocalizacionLongitud +
        '&addressdetails=1';
        
        this.http.get(this.urlNominatin).subscribe((data: any) => {
          this.location = data.display_name;
        })

  }

  formatDate(date: Date) {
    if ( Number.isNaN(date.getDay()) ) { return "Sin completar" }
    
    const dateFormat = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes().toString().length <= 1 ? date.getMinutes().toString()+'0' : date.getMinutes()}`;
    return dateFormat
  }

}
