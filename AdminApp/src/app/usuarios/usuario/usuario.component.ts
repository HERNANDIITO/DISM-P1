import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent  implements OnInit {

  @Input() usuario?: Usuario;
  @Output() updateUsers = new EventEmitter<any>();  

  @ViewChild("details") detailsModal?: IonModal;
  @ViewChild("modify")  modifyModal?:  IonModal;
  @ViewChild("delete")  deleteModal?:  IonModal;

  userInput: string = this.usuario?.Usuario ? this.usuario.Usuario : "" 
  nameInput: string = this.usuario?.Nombre  ? this.usuario.Nombre  : ""

  constructor(private userService: UsuarioService) {}

  ngOnInit() {
    this.userInput = this.usuario?.Usuario ? this.usuario.Usuario : "" 
    this.nameInput = this.usuario?.Nombre  ? this.usuario.Nombre  : ""
  }


  cancel(modal?: IonModal) {
    if ( !modal ) { return; }

    modal.dismiss(null, 'cancel');
    this.updateUsers.emit();

  }

  deleteUser() {    
    if ( !this.usuario ) { return; }
    this.userService.deleteUser(this.usuario?.IdUsuario).subscribe(data => {
      this.cancel(this.deleteModal)
    });

  }
  
  modifyUser() {
    if ( !this.usuario ) { return; }

    const newUser: Usuario = {
      IdUsuario: this.usuario?.IdUsuario,
      Nombre: this.nameInput,
      Usuario: this.userInput,
      Clave: this.usuario.Clave
    }

    this.userService.modifyUser(newUser).subscribe(data => {
      this.usuario = data;      
      this.cancel(this.modifyModal)
    });
  }
}
