import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaPage } from './busca.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BuscaPageRoutingModule } from './busca-routing.module';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BuscaPageRoutingModule
  ],
  declarations: [BuscaPage, SearchResultItemComponent]
})
export class BuscaPageModule {}
