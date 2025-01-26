import { Component, Input, OnInit } from '@angular/core';
import { ResultadoBusca } from '../models/ResultadoBusca';
import { SearchResult } from '../models/SearchResult';
import { SearchService } from '../search.service';
import { DominantColorService } from '../dominant-color.service';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent  implements OnInit {
  @Input({required: true}) resultadoBusca! : SearchResult;
  dominante = "#ffffff";

  constructor(private searchService : SearchService, private dcService : DominantColorService) { }

  async ngOnInit() {
    
    this.dominante = await this.dcService.corDominante(this.resultadoBusca.albumCoverPath);
  }

}
