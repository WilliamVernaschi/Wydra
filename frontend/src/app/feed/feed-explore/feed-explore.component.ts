import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-feed-explore',
  templateUrl: './feed-explore.component.html',
  styleUrls: ['./feed-explore.component.scss'],
})
export class FeedExploreComponent  {

  fyReview? : Review;
  constructor(private reviewService : ReviewService) {
    this.fyReview = reviewService.getReviewById('0');
  }

  get randomReview(){
    return this.reviewService.getRandomReview();
  }

  

  

}
