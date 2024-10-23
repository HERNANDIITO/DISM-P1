import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-fichaje',
  templateUrl: './fichaje.component.html',
  styleUrls: ['./fichaje.component.scss'],
})
export class FichajeComponent implements OnInit{

  @ViewChild(IonModal) modal?: IonModal;  
  constructor() { }

  map?: Leaflet.Map;

  cancel() {this.modal?.dismiss(null, 'cancel');}

  ngOnInit(): void {
    this.leafletMap();
  }
  
  ionViewDidEnter() {
    console.log("ENTRA");
  }

  leafletMap() {
    this.map = Leaflet.map('map').setView([38.38735, -0.51238], 5);
    console.log(this.map)
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'DISM © Ionic LeafLet',
    }).addTo(this.map);

    Leaflet.marker([38.38735,-0.51238]).addTo(this.map).bindPopup('Alicante').openPopup();
    Leaflet.marker([41.38113, 2.12244]).addTo(this.map).bindPopup('Barcelona').openPopup();
  }

}
