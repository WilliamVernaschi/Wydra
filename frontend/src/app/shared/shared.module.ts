import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FancyScoreComponent } from '../fancy-score/fancy-score.component';
import { FancyTitleComponent } from '../fancy-title/fancy-title.component';
import { FeedReviewsComponent } from '../feed-reviews/feed-reviews.component';
import { FeedExploreComponent } from '../feed/feed-explore/feed-explore.component';
import { AmostraReviewComponent } from '../feed-reviews/amostra-review/amostra-review.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AudiotecaItemComponent } from '../audioteca/audioteca-item/audioteca-item.component';




@NgModule({
  declarations: [FancyScoreComponent, FancyTitleComponent, FeedReviewsComponent, FeedExploreComponent, AmostraReviewComponent, AudiotecaItemComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [FancyScoreComponent, FancyTitleComponent, FeedReviewsComponent, FeedExploreComponent, AmostraReviewComponent, AudiotecaItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
