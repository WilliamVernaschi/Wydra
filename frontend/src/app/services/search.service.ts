import { Injectable } from '@angular/core';
import { SearchResult } from '../models/SearchResult';
import Fuse from 'fuse.js';
import { IFuseOptions } from 'fuse.js';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  private results : SearchResult[] = [
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
    },
    {
      "id": "5",
      "userId": "5",
      "avaliacaoMedia": 9.4,
      "descricaoComunidade": ["Intenso", "Criativo", "Subjetivo"],
      "musica": false,
      "titulo": "The Dark Side of the Moon",
      "artista": "Pink Floyd",
      "albumCoverPath": "assets/dark-side.jpg"
    },
    {
      "id": "6",
      "userId": "6",
      "avaliacaoMedia": 8.8,
      "descricaoComunidade": ["Dançante", "Melódico", "Pop"],
      "musica": true,
      "titulo": "Future Nostalgia",
      "artista": "Dua Lipa",
      "albumCoverPath": "assets/future-nostalgia.jpg"
    },
    {
      "id": "7",
      "userId": "7",
      "avaliacaoMedia": 9.0,
      "descricaoComunidade": ["Introspectivo", "Suave", "Romântico"],
      "musica": false,
      "titulo": "Folklore",
      "artista": "Taylor Swift",
      "albumCoverPath": "assets/folklore.jpg"
    },
    {
      "id": "8",
      "userId": "8",
      "avaliacaoMedia": 9.2,
      "descricaoComunidade": ["Experimental", "Sombrio", "Atmosférico"],
      "musica": false,
      "titulo": "Blackstar",
      "artista": "David Bowie",
      "albumCoverPath": "assets/blackstar.jpg"
    },
    {
      "id": "9",
      "userId": "9",
      "avaliacaoMedia": 9.4,
      "descricaoComunidade": ["Contundente", "Pessoal", "Reflexivo"],
      "musica": true,
      "titulo": "After Hours",
      "artista": "The Weeknd",
      "albumCoverPath": "assets/after-hours.jpg"
    },
    {
      "id": "10",
      "userId": "10",
      "avaliacaoMedia": 9.1,
      "descricaoComunidade": ["Emotivo", "Leve", "Independente"],
      "musica": false,
      "titulo": "In the Aeroplane Over the Sea",
      "artista": "Neutral Milk Hotel",
      "albumCoverPath": "assets/in-the.jpg"
    },
    {
      "id": "11",
      "userId": "11",
      "avaliacaoMedia": 9.3,
      "descricaoComunidade": ["Épico", "Ambicioso", "Cinemático"],
      "musica": true,
      "titulo": "DAMN.",
      "artista": "Kendrick Lamar",
      "albumCoverPath": "assets/damn.jpg"
    },
    {
      "id": "12",
      "userId": "12",
      "avaliacaoMedia": 9.0,
      "descricaoComunidade": ["Suave", "Poético", "Minimalista"],
      "musica": true,
      "titulo": "A Moon Shaped Pool",
      "artista": "Radiohead",
      "albumCoverPath": "assets/a-moon.jpg"
    },
    {
      "id": "13",
      "userId": "13",
      "avaliacaoMedia": 9.2,
      "descricaoComunidade": ["Sincero", "Complexo", "Orgânico"],
      "musica": true,
      "titulo": "Everything Is Love",
      "artista": "The Carters",
      "albumCoverPath": "assets/everything-is.jpg"
    },
    {
      "id": "14",
      "userId": "14",
      "avaliacaoMedia": 9.0,
      "descricaoComunidade": ["Denso", "Experimental", "Melódico"],
      "musica": false,
      "titulo": "Kid A",
      "artista": "Radiohead",
      "albumCoverPath": "assets/kid-a.jpg"
    },
    {
      "id": "15",
      "userId": "15",
      "avaliacaoMedia": 9.4,
      "descricaoComunidade": ["Narrativo", "Emotivo", "Profundo"],
      "musica": true,
      "titulo": "Good Kid, M.A.A.D City",
      "artista": "Kendrick Lamar",
      "albumCoverPath": "assets/good-kid.jpg"
    },
    {
      "id": "16",
      "userId": "16",
      "avaliacaoMedia": 9.3,
      "descricaoComunidade": ["Lúdico", "Cativante", "Diverso"],
      "musica": false,
      "titulo": "The Life of Pablo",
      "artista": "Kanye West",
      "albumCoverPath": "assets/the-life.jpg"
    },
    {
      "id": "17",
      "userId": "17",
      "avaliacaoMedia": 9.1,
      "descricaoComunidade": ["Arrojado", "Melódico", "Aconchegante"],
      "musica": true,
      "titulo": "Channel Orange",
      "artista": "Frank Ocean",
      "albumCoverPath": "assets/channel-orange.jpg"
    },
    {
      "id": "18",
      "userId": "18",
      "avaliacaoMedia": 9.2,
      "descricaoComunidade": ["Sombrio", "Rítmico", "Intenso"],
      "musica": false,
      "titulo": "LP1",
      "artista": "FKA twigs",
      "albumCoverPath": "assets/lp1.jpg"
    },
    {
      "id": "19",
      "userId": "19",
      "avaliacaoMedia": 9.5,
      "descricaoComunidade": ["Dramático", "Ambiente", "Poderoso"],
      "musica": true,
      "titulo": "Lemonade",
      "artista": "Beyoncé",
      "albumCoverPath": "assets/lemonade.jpg"
    }
  ]

  private fuse: Fuse<SearchResult>;

  constructor() {
    const options: IFuseOptions<SearchResult> = {
      keys: ['titulo'],
      threshold: 0.3 // Adjust the threshold for sensitivity
    };
    this.fuse = new Fuse(this.results, options);
  }

  getSearchById(id: string): SearchResult | undefined {
    return this.results.find(search => search.id === id);
  }

  getSearchByTitle(title: string): SearchResult[] {
    return this.fuse.search(title).map(result => result.item);
  }
}
