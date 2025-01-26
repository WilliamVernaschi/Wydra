import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { Review } from '../models/Review';

@Component({
  selector: 'app-feed-reviews',
  templateUrl: './feed-reviews.component.html',
  styleUrls: ['./feed-reviews.component.scss'],
})
export class FeedReviewsComponent  implements OnInit {

  feedReviews: Review[] = [];

  constructor(private router : Router, private reviewService : ReviewService) {}
  
    putReviewOnFeed(review : Review | undefined){
      if(review){
        this.feedReviews.push(review)
      }
  
    }
  
  
    async ngOnInit() {
      
      
      
      this.putReviewOnFeed(this.reviewService.getReviewById('0'));
      this.putReviewOnFeed(this.reviewService.getReviewById('1'));
      this.putReviewOnFeed(this.reviewService.getReviewById('2'));
      this.putReviewOnFeed(this.reviewService.getReviewById('3'));
    }

}
