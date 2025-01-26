import { Component, OnInit } from '@angular/core';
import { ResultadoBusca } from '../models/ResultadoBusca';
import { SearchResult } from '../models/SearchResult';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-busca',
  templateUrl: 'busca.page.html',
  styleUrls: ['busca.page.scss']
})
export class BuscaPage implements OnInit{

  results : SearchResult[] = [];
  constructor(private searchService : SearchService) {}

  putSearch(search : SearchResult | undefined){
      if(search){
        this.results.push(search);
      }
  
    }
  
  
  async ngOnInit() {
      
      
      
    this.putSearch(this.searchService.getSearchById('0'));
    this.putSearch(this.searchService.getSearchById('1'));
    this.putSearch(this.searchService.getSearchById('2'));
    this.putSearch(this.searchService.getSearchById('3'));
    
  }

  

}
