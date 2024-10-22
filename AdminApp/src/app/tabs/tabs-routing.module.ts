import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosPageModule)
      },
      {
        path: 'trabajos',
        loadChildren: () => import('../trabajos/trabajos.module').then(m => m.TrabajosPageModule)
      },
      {
        path: 'fichajes',
        loadChildren: () => import('../fichajes/fichajes.module').then(m => m.FichajesPageModule)
      },
      {
        path: '',
        redirectTo: '/usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
