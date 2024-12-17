import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaPage } from './busca.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BuscaPageRoutingModule } from './busca-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BuscaPageRoutingModule
  ],
  declarations: [BuscaPage]
})
export class BuscaPageModule {}
