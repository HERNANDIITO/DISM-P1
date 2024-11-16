import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trabajo } from 'src/app/interfaces/trabajo';
import { NewFichaje } from 'src/app/interfaces/fichaje';
import { TrabajoService } from 'src/app/services/trabajo.service';
import { FichajeService } from 'src/app/services/fichaje.service';
import { Geolocation } from '@capacitor/geolocation';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-empezar-trabajo',
  templateUrl: './empezar-trabajo.component.html',
  styleUrls: [
    './empezar-trabajo.component.scss',
    '../registro.page.scss'
  ],
})
export class EmpezarTrabajoComponent  implements OnInit {

  constructor(
    private trabajoService: TrabajoService,
    private fichajeService: FichajeService,
    private usuarioService: UsuarioService
  ) { }

  trabajos?: Trabajo[]
  users?: Usuario[]
  selected: number = -1;
  @Input() selectedUser?: number
  @Output() outputEmitter = new EventEmitter<number>();  

  ngOnInit() {
    this.trabajoService.getTrabajos().subscribe( res => {
      this.trabajos = res;
    })
  }

  async empezarTrabajo() {

    if ( this.selected < 0 ) { return; }
    
    const fichaje: NewFichaje = {
      FechaHoraEntrada: new Date().toString(),
      FechaHoraSalida: '',
      HorasTrabajadas: 0,
      IdTrabajo: this.selected.toString(),
      IdUsuario: this.selectedUser!.toString(),
      GeolocalizacionLatitud: 0,
      GeolocalizacionLongitud: 0
    }
    
    await Geolocation.getCurrentPosition().then( geoPosition => {
      fichaje.GeolocalizacionLatitud = geoPosition.coords.latitude
      fichaje.GeolocalizacionLongitud = geoPosition.coords.longitude
    })

    this.fichajeService.empezarFichaje(fichaje).subscribe( res => {
      console.log(res);
      this.outputEmitter.emit();
    } )
  }
}
