import { Component } from '@angular/core';
import { AudiotecaService } from '../services/audioteca.service';
import { AudiotecaItem } from '../models/AudiotecaItem';

@Component({
  selector: 'app-audioteca',
  templateUrl: 'audioteca.page.html',
  styleUrls: ['audioteca.page.scss']
})
export class AudiotecaPage {

  constructor(private audiotecaService : AudiotecaService) { }
  
    audiotecaItems: AudiotecaItem[] = [];
      
  
    putReviewOnFeed(review : AudiotecaItem | undefined){
      if(review){
        this.audiotecaItems.push(review)
      }
  
    }
  
  
    async ngOnInit() {
      
      
      
      this.putReviewOnFeed(this.audiotecaService.getItemById('0'));
      this.putReviewOnFeed(this.audiotecaService.getItemById('1'));
      this.putReviewOnFeed(this.audiotecaService.getItemById('2'));
      this.putReviewOnFeed(this.audiotecaService.getItemById('3'));
      this.putReviewOnFeed(this.audiotecaService.getItemById('4'));
      this.putReviewOnFeed(this.audiotecaService.getItemById('5'));
      this.putReviewOnFeed(this.audiotecaService.getItemById('6'));
    }

}
