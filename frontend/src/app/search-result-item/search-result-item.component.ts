import { Component, Input, OnInit } from '@angular/core';
import { ResultadoBusca } from '../models/ResultadoBusca';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent  implements OnInit {
  @Input({required: true}) resultadoBusca! : ResultadoBusca;

  constructor() { }

  ngOnInit() {}

}
