import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrabajosPage } from './trabajos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TrabajosPageRoutingModule } from './trabajos-routing.module';
import { TrabajoComponent } from './trabajo/trabajo.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TrabajosPageRoutingModule
  ],
  declarations: [TrabajosPage, TrabajoComponent]
})
export class TrabajosPageModule {}
