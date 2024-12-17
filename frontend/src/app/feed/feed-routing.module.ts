import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPage } from './feed.page';
import { ReviewComponent } from '../review/review.component';

const routes: Routes = [
  {
    path: 'review/:id',
    component: ReviewComponent
  },
  {
    path: '',
    component: FeedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedPageRoutingModule {}
