import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPage } from './feed.page';
import { ReviewComponent } from '../review/review.component';
import { FeedExploreComponent } from './feed-explore/feed-explore.component';
import { FeedReviewsComponent } from '../feed-reviews/feed-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: FeedPage,
    children: [
      {
        path: 'avaliacoes',
        component: FeedReviewsComponent
      },
      {
        path: 'explorar',
        component: FeedExploreComponent
      },
      {
        path: '',
        redirectTo: 'avaliacoes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'review/:id',
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedPageRoutingModule {}