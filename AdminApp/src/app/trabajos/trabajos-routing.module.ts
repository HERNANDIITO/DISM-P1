import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajosPage } from './trabajos.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajosPageRoutingModule {}
