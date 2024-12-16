import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Review } from './models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {


  constructor(private http: HttpClient) { }



  getAllReviews(): Promise<Review> {
    return firstValueFrom(this.http.get<Review>('/api/reviews'));
  }
}
