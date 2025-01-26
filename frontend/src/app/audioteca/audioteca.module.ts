import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudiotecaPage } from './audioteca.page';

import { AudiotecaPageRoutingModule } from './audioteca-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AudiotecaPageRoutingModule,
    SharedModule
  ],
  declarations: [AudiotecaPage]
})
export class AudiotecaPageModule {}
