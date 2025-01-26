// review.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../models/Review';
import { ReviewService } from '../review.service';
import { ToastService } from '../toast.service';
import { DominantColorService } from '../dominant-color.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  review!: Review;
  corDominante: string = "#ffff00";

  constructor(private route: ActivatedRoute, private reviewService : ReviewService, private toastService : ToastService, private dominantColorService : DominantColorService) { }

  async ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('id') as string;
    const retrievedReview = this.reviewService.getReviewById(id);
    if(retrievedReview) this.review = retrievedReview;
    else{
      this.toastService.failure("O que você tá fazendo?? Id não encontrado");
    }
    this.corDominante = await this.dominantColorService.corDominante(this.review.albumCoverPath);
  }

}