import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedPage } from './feed.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FeedPageRoutingModule } from './feed-routing.module';
import { AmostraReviewComponent } from '../amostra-review/amostra-review.component';
import { ReviewComponent } from '../review/review.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FeedPageRoutingModule,
  ],
  declarations: [FeedPage, AmostraReviewComponent, ReviewComponent]
})
export class FeedPageModule {}
