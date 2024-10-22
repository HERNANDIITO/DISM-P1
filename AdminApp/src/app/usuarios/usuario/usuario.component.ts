import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent  implements OnInit {

  @Input() nombre?: string;
  @Input() trabajo?: string;
  constructor() { }

  ngOnInit() {}

  @ViewChild(IonModal) modal?: IonModal;

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

}
