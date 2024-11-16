import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { NewUsuario, Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss']
})
export class UsuariosPage implements OnInit {

  constructor(private usuarioService: UsuarioService) {}

  userInput: string = ""
  nameInput: string = ""
  claveInput: string = ""


  ngOnInit(): void {
    this.getUsers();
  }

  @ViewChild(IonModal) modal?: IonModal;
  users?: Usuario[];

  cancel() {this.modal?.dismiss(null, 'cancel');}

  sendUser() {
    const newUsu: NewUsuario = {
      Nombre: this.nameInput,
      Usuario: this.userInput,
      Clave: this.claveInput
    }

    this.usuarioService.postUser(newUsu).subscribe( data => {
      this.getUsers()
      this.cancel()
    })
  }

  getUsers() {
    this.usuarioService.getAllUsers().subscribe( res => {
      this.users = res;
    })
  }

}
