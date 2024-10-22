import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss']
})
export class UsuariosPage {

  constructor() {}

  @ViewChild(IonModal) modal?: IonModal;

  cancel() {this.modal?.dismiss(null, 'cancel');}

}
