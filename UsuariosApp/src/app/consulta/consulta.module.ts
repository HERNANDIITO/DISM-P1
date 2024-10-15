import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultaPage } from './consulta.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConsultaPageRoutingModule } from './consulta-routing.module';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConsultaPageRoutingModule
  ],
  declarations: [
    ConsultaPage,
    RegistroComponent
  ]
})
export class ConsultaPageModule {}
