import { Component, OnInit } from '@angular/core';
import {Review} from "../models/Review";
import { ReviewService } from '../review.service';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage implements OnInit{

  feedReviews: Review[] = [];

  constructor(private router : Router, private reviewService : ReviewService, private toastService : ToastService) {}

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

  segmentChanged(event: any) {
    const selectedSegment = event.detail.value;
    this.router.navigate([`/feed/${selectedSegment}`]);
  }


  
  



}
