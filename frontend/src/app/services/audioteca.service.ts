import { Injectable } from '@angular/core';
import { AudiotecaItem } from '../models/AudiotecaItem';


@Injectable({
  providedIn: 'root'
})
export class AudiotecaService {

  private results : AudiotecaItem[] = [
      {
        "id": "0",
        "userId": "0",
        "avaliacaoMedia": 9.1,
        "musica": false,
        "titulo": "Blonde",
        "artista": "Frank Ocean",
        "albumCoverPath": "assets/blonde.jpg"
      },
      {
        "id": "1",
        "userId": "1",
        "avaliacaoMedia": 9.3,
        "musica": false,
        "titulo": "To Pimp a Butterfly",
        "artista": "Kendrick Lamar",
        "albumCoverPath": "assets/to-pimp.jpg"
      },
      {
        "id": "2",
        "userId": "2",
        "avaliacaoMedia": 9.0,
        "musica": false,
        "titulo": "Melodrama",
        "artista": "Lorde",
        "albumCoverPath": "assets/melodrama.jpg"
      },
      {
        "id": "3",
        "userId": "3",
        "avaliacaoMedia": 9.2,
        "musica": true,
        "titulo": "Punisher",
        "artista": "Phoebe Bridgers",
        "albumCoverPath": "assets/punisher.jpg"
      },
      {
        "id": "5",
        "userId": "5",
        "avaliacaoMedia": 9.4,
        "musica": false,
        "titulo": "The Dark Side of the Moon",
        "artista": "Pink Floyd",
        "albumCoverPath": "assets/dark-side.jpg"
      },
      {
        "id": "6",
        "userId": "6",
        "avaliacaoMedia": 8.8,
        "musica": true,
        "titulo": "Future Nostalgia",
        "artista": "Dua Lipa",
        "albumCoverPath": "assets/future-nostalgia.jpg"
      },
      {
        "id": "7",
        "userId": "7",
        "avaliacaoMedia": 9.0,
        "musica": false,
        "titulo": "Folklore",
        "artista": "Taylor Swift",
        "albumCoverPath": "assets/folklore.jpg"
      },
      {
        "id": "8",
        "userId": "8",
        "avaliacaoMedia": 9.2,
        "musica": false,
        "titulo": "Blackstar",
        "artista": "David Bowie",
        "albumCoverPath": "assets/blackstar.jpg"
      },
    ]
  
  constructor() { }

  getItemById(id: string): AudiotecaItem | undefined {
    return this.results.find(item => item.id === id);
  }
}
