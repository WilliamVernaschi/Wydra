import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudiotecaPage } from './audioteca.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AudiotecaPageRoutingModule } from './audioteca-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AudiotecaPageRoutingModule
  ],
  declarations: [AudiotecaPage]
})
export class AudiotecaPageModule {}
