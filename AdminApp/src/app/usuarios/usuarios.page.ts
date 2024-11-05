import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss']
})
export class UsuariosPage implements OnInit {

  constructor(private usuarioService: UsuarioService) {}


  ngOnInit(): void {
    this.getUsers();
  }

  @ViewChild(IonModal) modal?: IonModal;
  users: Usuario[] = [];

  cancel() {this.modal?.dismiss(null, 'cancel');}

  sendUser() {
    this.usuarioService.getAllUsers().subscribe( res => {
      this.users = res;
    })
  }

  getUsers() {
    this.usuarioService.getAllUsers().subscribe( res => {
      this.users = res;
    })
  }

}
