import { Component } from '@angular/core';
import {Review} from "../models/Review";

@Component({
  selector: 'app-tab1',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage {

  review1 : Review = {
    artista: "Kanye West",
    id: '0',
    userId: '0',
    nomeUsuario: 'Paulo Mota',
    avaliacao: 5,
    comentario: 'Bound 2 é uma das faixas mais acessíveis e emocionais de Yeezus, contrastando com a intensidade abrasiva do resto do álbum. A música é um respiro de nostalgia, com samples de soul da música Bound de Ponderosa Twins Plus One, criando uma base melódica suave que remete aos primeiros álbuns de Kanye, mas com seu toque moderno e ousado.\n' +
      '\n' +
      'As letras, que alternam entre um amor intenso e cruas reflexões sobre relacionamentos, são acompanhadas por uma produção repleta de contrastes. O beat, que mistura sintetizadores pesados com uma linha de piano cativante, cria uma sensação de tensão que é suavizada pelas melodias soul, quase como se Kanye estivesse lutando entre os dois mundos – o passado e o futuro, o romântico e o realista.\n' +
      '\n' +
      'O clímax da música vem quando Kanye, em seu estilo característico, mistura vulnerabilidade e bravata, entregando uma performance cheia de emoção. A produção pode ser considerada minimalista em comparação com outros hits de Kanye, mas é precisamente isso que a torna memorável – uma simplicidade que não sacrifica a profundidade.\n' +
      '\n' +
      'A música também se destaca pela sua linha de baixo marcante e pelos vocais de apoio de Charlie Wilson, que adicionam uma camada extra de calor e profundidade ao som.\n' +
      '\n' +
      'Bound 2 é uma canção que mistura um sentimento retrô com a inovação característica de Kanye, equilibrando uma produção experimental com um conteúdo emocional genuíno. É uma das faixas mais subestimadas de Yeezus e oferece uma visão interessante da dualidade presente no álbum como um todo.',
    musica: 'Bound 2',
    createdAt: new Date('2024-12-16T12:00:00Z')
  }
  constructor() {}



}
