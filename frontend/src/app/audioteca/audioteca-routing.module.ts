import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiotecaPage } from './audioteca.page';

const routes: Routes = [
  {
    path: '',
    component: AudiotecaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiotecaPageRoutingModule {}
