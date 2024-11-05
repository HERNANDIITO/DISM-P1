import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent  implements OnInit {

  @Input() usuario?: Usuario;
  constructor() { }

  ngOnInit() {}

  @ViewChild(IonModal) modal?: IonModal;

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

}
