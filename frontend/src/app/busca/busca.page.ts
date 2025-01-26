import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../models/SearchResult';
import { SearchService } from '../services/search.service';
import { SearchState } from '../models/SearchState';

@Component({
  selector: 'app-busca',
  templateUrl: 'busca.page.html',
  styleUrls: ['busca.page.scss']
})


export class BuscaPage implements OnInit{
  
  results : SearchResult[] = [];
  searchState : SearchState = 'EMPTY';
  constructor(private searchService : SearchService) {}

  putSearch(search : SearchResult | undefined){
      if(search){
        this.results.push(search);
      }
  
    }
  
  
  async ngOnInit() {
      
    
  }

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value || '';
    
    this.results = this.searchService.getSearchByTitle(query);
    if(query == '')
      this.searchState = 'EMPTY';
    else if(this.results.length === 0) 
      this.searchState = 'NO_RESULT'
    else
      this.searchState = 'TYPING'
  }

  

}
