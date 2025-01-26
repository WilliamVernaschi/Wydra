import { Component, OnInit } from '@angular/core';
import {Review} from "../models/Review";
import { ReviewService } from '../services/review.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage implements OnInit{

  feedReviews: Review[] = [];
  selectedSegment = 'avaliacoes'; // default

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
    this.putReviewOnFeed(this.reviewService.getReviewById('4'));
    this.putReviewOnFeed(this.reviewService.getReviewById('5'));
  }

  segmentChanged(event: any) {
    const selectedSegment = event.detail.value;
    this.router.navigate([`tabs/feed/${selectedSegment}`]);
    this.selectedSegment = selectedSegment;
  }


  
  



}
