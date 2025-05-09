import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FichajesPage } from './fichajes.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FichajesPageRoutingModule } from './fichajes-routing.module';
import { FichajeComponent } from './fichaje/fichaje.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FichajesPageRoutingModule
  ],
  declarations: [FichajesPage, FichajeComponent]
})
export class FichajesPageModule {}
