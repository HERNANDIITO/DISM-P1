import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosPage } from './usuarios.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UsuariosPageRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UsuariosPageRoutingModule
  ],
  declarations: [UsuariosPage, UsuarioComponent]
})
export class UsuariosPageModule {}
