import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedPage } from './feed.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FeedPageRoutingModule } from './feed-routing.module';
import { AmostraReviewComponent } from '../amostra-review/amostra-review.component';
import { ReviewComponent } from '../review/review.component';
import { ReviewService } from '../review.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastService } from '../toast.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FeedPageRoutingModule,
  ],
  declarations: [FeedPage, AmostraReviewComponent, ReviewComponent],
  providers: [ReviewService, HttpClient, ToastService]
})
export class FeedPageModule {}
