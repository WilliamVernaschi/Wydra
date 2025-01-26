import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedPage } from './feed.page';

import { FeedPageRoutingModule } from './feed-routing.module';
import { AmostraReviewComponent } from '../feed-reviews/amostra-review/amostra-review.component';
import { ReviewComponent } from '../review/review.component';
import { ReviewService } from '../services/review.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastService } from '../services/toast.service';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeedPageRoutingModule,
    SharedModule
  ],
  declarations: [FeedPage, ReviewComponent],
  providers: [ReviewService, HttpClient, ToastService]
})
export class FeedPageModule {}
