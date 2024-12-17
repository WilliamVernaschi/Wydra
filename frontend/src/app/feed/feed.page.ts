import { Component, OnInit } from '@angular/core';
import {Review} from "../models/Review";
import { ReviewService } from '../review.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage implements OnInit{

  feedReviews: Review[] = [];

  constructor(private reviewService : ReviewService, private toastService : ToastService) {}


  async ngOnInit() {
    try {
      this.feedReviews = await this.reviewService.getAllReviews();
    }
    catch(error) {
      this.toastService.failure("Verifique sua conexão com a internet.")
      console.log("nao conseguiu pegar as reviews da api")
    }
    
    this.feedReviews.push(this.review1);
    this.feedReviews.push(this.review2);
    this.feedReviews.push(this.review1);
  }


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
  review2 : Review = {
    artista: "Taylor Swift",
    id: '1',
    userId: '1',
    nomeUsuario: 'Ana Silva',
    avaliacao: 4.5,
    comentario: 'Love Story é uma das canções mais emblemáticas de Taylor Swift, marcando sua transição do country para o pop. A música reconta o clássico romance de Romeo e Julieta, mas com um final feliz, capturando a essência do amor jovem e obstinado.\n' +
      '\n' +
      'A produção é envolvente, com violões acústicos e uma melodia cativante que cresce até um refrão poderoso. A letra é sincera e pessoal, refletindo a habilidade de Taylor em transformar experiências pessoais em canções universais.\n' +
      '\n' +
      'A pontuação de 4.5 reflete a qualidade da composição e sua capacidade de ressoar com uma ampla audiência, embora alguns possam achar que a produção poderia ser mais ousada. Ainda assim, é uma faixa que solidificou o lugar de Taylor Swift na indústria musical.\n' +
      '\n' +
      'Recomendo essa música para quem aprecia histórias de amor clássicas contadas através de uma perspectiva moderna e quer se emocionar com uma melodia bem construída.',
    musica: 'Love Story',
    createdAt: new Date('2024-12-17T12:00:00Z')
  }



}
