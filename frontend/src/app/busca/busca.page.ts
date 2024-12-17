import { Component, OnInit } from '@angular/core';
import { ResultadoBusca } from '../models/ResultadoBusca';

@Component({
  selector: 'app-busca',
  templateUrl: 'busca.page.html',
  styleUrls: ['busca.page.scss']
})
export class BuscaPage implements OnInit{

  results : ResultadoBusca[] = [];
  constructor() {}

  ngOnInit(): void {
    const resultado: ResultadoBusca = {
      id: '0',
      titulo: 'Bound 2',
      artista: 'Kanye West',
      album: 'Yeezus',
      duracao: 240,
      url: '',
      avaliacaoMedia: 5, 
    };
    const resultado2: ResultadoBusca = {
      id: '1',
      titulo: 'Stronger',
      artista: 'Kanye West',
      album: 'Graduation',
      duracao: 312,
      url: '',
      avaliacaoMedia: 4.5
    };
    this.results.push(resultado2);
    this.results.push(resultado);
  }

}
