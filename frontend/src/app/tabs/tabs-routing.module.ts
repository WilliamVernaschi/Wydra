import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'busca',
        loadChildren: () => import('../busca/busca.module').then(m => m.BuscaModule)
      },
      {
        path: 'audioteca',
        loadChildren: () => import('../audioteca/audioteca.module').then(m => m.AudiotecaPageModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('../usuario/usuario.module').then(m => m.UsuarioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
