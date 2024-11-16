import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import * as Leaflet from 'leaflet';
import { Fichaje } from 'src/app/interfaces/fichaje';
import { Trabajo } from 'src/app/interfaces/trabajo';
import { Usuario } from 'src/app/interfaces/usuario';
import { FichajeService } from 'src/app/services/fichaje.service';
import { TrabajoService } from 'src/app/services/trabajo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-fichaje',
  templateUrl: './fichaje.component.html',
  styleUrls: ['./fichaje.component.scss'],
})
export class FichajeComponent implements AfterViewInit, OnInit {

  @ViewChild(IonModal) modal?: IonModal;
  @Input() fichaje!: Fichaje

  constructor(
    private trabajoService: TrabajoService,
    private fichajeService: FichajeService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUserByID(this.fichaje.IdUsuario).subscribe(data => {
      this.usuario = data;
    })

    this.horaEntrada = this.fichajeService.formatDate( new Date(this.fichaje.FechaHoraEntrada) )
    this.horaSalida  = this.fichajeService.formatDate( new Date(this.fichaje.FechaHoraSalida)  )
  }

  map?: Leaflet.Map;
  trabajo?: Trabajo;
  usuario?: Usuario;
  horaEntrada?: string;
  horaSalida?: string;

  cancel() { this.modal?.dismiss(null, 'cancel'); }

  ngAfterViewInit() {
    this.trabajoService.getTrabajoByID(this.fichaje.IdTrabajo).subscribe( data => {
      this.trabajo = data;
      this.leafletMap();
    });
  }

  leafletMap() {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl       = 'assets/marker-icon.png';
    const shadowUrl     = 'assets/marker-shadow.png';

    const coords: Leaflet.PointExpression = [
      this.fichaje.GeolocalizacionLatitud,
      this.fichaje.GeolocalizacionLongitud
    ]

    const iconDefault   = Leaflet.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: coords,
      shadowSize: [41, 41]
    });

    Leaflet.Marker.prototype.options.icon = iconDefault;
    this.map = Leaflet.map(`map-${this.fichaje.IdFichaje}`, { center: coords }).setView( coords, 4 );
    
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: 'DISM © Ionic Leaflet',
    }).addTo(this.map);

    Leaflet.marker(coords).addTo(this.map);
  }

}