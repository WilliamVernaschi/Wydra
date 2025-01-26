import { Injectable } from '@angular/core';
import { SearchResult } from './models/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  results : SearchResult[] = [
    {
      "id": "0",
      "userId": "0",
      "avaliacaoMedia": 9.1,
      "descricaoComunidade": ["Introspectivo", "Atmosférico", "Experimental"],
      "musica": false,
      "titulo": "Blonde",
      "artista": "Frank Ocean",
      "albumCoverPath": "assets/blonde.jpg"
    },
    {
      "id": "1",
      "userId": "1",
      "avaliacaoMedia": 9.3,
      "descricaoComunidade": ["Vibrante", "Criativo", "Inovador"],
      "musica": false,
      "titulo": "To Pimp a Butterfly",
      "artista": "Kendrick Lamar",
      "albumCoverPath": "assets/to-pimp.jpg"
    },
    {
      "id": "2",
      "userId": "2",
      "avaliacaoMedia": 9.0,
      "descricaoComunidade": ["Melódico", "Reflexivo", "Cativante"],
      "musica": false,
      "titulo": "Melodrama",
      "artista": "Lorde",
      "albumCoverPath": "assets/melodrama.jpg"
    },
    {
      "id": "3",
      "userId": "3",
      "avaliacaoMedia": 9.2,
      "descricaoComunidade": ["Profundo", "Íntimo", "Atmosférico"],
      "musica": true,
      "titulo": "Punisher",
      "artista": "Phoebe Bridgers",
      "albumCoverPath": "assets/punisher.jpg"
    },
    {
      "id": "4",
      "userId": "4",
      "avaliacaoMedia": 9.5,
      "descricaoComunidade": ["Poderoso", "Emocionante", "Contundente"],
      "musica": true,
      "titulo": "My Beautiful Dark Twisted Fantasy",
      "artista": "Kanye West",
      "albumCoverPath": "assets/mbdtf.jpg"
    }
  ]

  getSearchById(id: string): SearchResult | undefined {
    return this.results.find(search => search.id === id);
  }
}
