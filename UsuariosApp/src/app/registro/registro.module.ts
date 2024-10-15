import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroPage } from './registro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RegistroPageRoutingModule } from './registro-routing.module';
import { TerminarTrabajoComponent } from './terminar-trabajo/terminar-trabajo.component';
import { EmpezarTrabajoComponent } from './empezar-trabajo/empezar-trabajo.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RegistroPageRoutingModule
  ],
  declarations: [
    RegistroPage,
    TerminarTrabajoComponent,
    EmpezarTrabajoComponent
  ]
})
export class RegistroPageModule {}
