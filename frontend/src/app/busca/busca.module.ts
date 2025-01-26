import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaPage } from './busca.page';
import { BuscaPageRoutingModule } from './busca-routing.module';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BuscaPageRoutingModule,
    SharedModule
  ],
  declarations: [BuscaPage, SearchResultItemComponent ]
})
export class BuscaModule {}
