import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Review } from './models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {


  constructor(private http: HttpClient) { }

  reviews : Review[] = [
    {
      artista: "Kanye West",
      id: '0',
      userId: '0',
      nomeUsuario: 'Paulo Mota',
      avaliacao: 10.0,
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
      createdAt: new Date('2024-12-16T12:00:00Z'),
      albumCoverPath: 'assets/yeezus.jpg',
      reviewerPath: 'assets/person4.jpg'
    },
    {
      artista: "Taylor Swift",
      id: '1',
      userId: '1',
      nomeUsuario: 'Ana Silva',
      avaliacao: 9.0,
      comentario: 'Love Story é uma das canções mais emblemáticas de Taylor Swift, marcando sua transição do country para o pop. A música reconta o clássico romance de Romeo e Julieta, mas com um final feliz, capturando a essência do amor jovem e obstinado.\n' +
        '\n' +
        'A produção é envolvente, com violões acústicos e uma melodia cativante que cresce até um refrão poderoso. A letra é sincera e pessoal, refletindo a habilidade de Taylor em transformar experiências pessoais em canções universais.\n' +
        '\n' +
        'A pontuação de 4.5 reflete a qualidade da composição e sua capacidade de ressoar com uma ampla audiência, embora alguns possam achar que a produção poderia ser mais ousada. Ainda assim, é uma faixa que solidificou o lugar de Taylor Swift na indústria musical.\n' +
        '\n' +
        'Recomendo essa música para quem aprecia histórias de amor clássicas contadas através de uma perspectiva moderna e quer se emocionar com uma melodia bem construída.',
      musica: 'Love Story',
      createdAt: new Date('2024-12-17T12:00:00Z'),
      albumCoverPath: 'assets/fearless.jpg',
      reviewerPath: 'assets/person3.jpg'
    },
    {
      artista: "The Beatles",
      id: '2',
      userId: '2',
      nomeUsuario: 'Lucas Pereira',
      avaliacao: 9.5,
      comentario: 'Here Comes the Sun é uma das faixas mais cativantes de Abbey Road, composta por George Harrison, que conseguiu capturar a essência de um novo amanhecer, tanto literal quanto metaforicamente. A canção é iluminada por uma melodia otimista e um arranjo que combina delicados acordes de guitarra acústica com harmonias vocais suaves, criando uma sensação de leveza e renovação.\n' +
        '\n' +
        'As letras são simples, mas profundamente poéticas, traduzindo uma mensagem universal de esperança e superação. O instrumental é brilhantemente executado, com a assinatura do Moog Synthesizer acrescentando texturas discretas e inovadoras para a época, enquanto os detalhes no ritmo mantêm a música fluida e envolvente.\n' +
        '\n' +
        'A contribuição de Harrison nesta faixa destaca não apenas sua evolução como compositor, mas também o espírito colaborativo dos Beatles no auge de sua maturidade artística. Apesar de estar em um álbum cheio de clássicos, Here Comes the Sun se destaca como uma obra-prima por sua acessibilidade e emoção genuína.\n' +
        '\n' +
        'Recomendo esta música para qualquer pessoa que esteja em busca de um raio de luz em dias sombrios, ou simplesmente queira desfrutar de uma das melhores produções musicais dos anos 60.',
      musica: 'Here Comes the Sun',
      createdAt: new Date('2024-12-18T12:00:00Z'),
      albumCoverPath: 'assets/abbey-road.jpg',
      reviewerPath: 'assets/person2.jpg'
    },
    {
      artista: "King Crimson",
      id: '3',
      userId: '3',
      nomeUsuario: 'Carlos Almeida',
      avaliacao: 9.5,
      comentario: 'In the Court of the Crimson King é uma obra-prima do rock progressivo que transcende o tempo e o espaço, definindo um padrão para a experimentação musical. Desde os primeiros acordes intensos de "21st Century Schizoid Man", o álbum deixa claro que King Crimson não está aqui para se conformar, mas para desafiar.\n\n' +
        'Cada faixa apresenta camadas de complexidade, alternando entre a intensidade caótica e momentos de profunda introspecção. "Epitaph" é uma das baladas mais poderosas do rock progressivo, com letras poéticas e arranjos melancólicos que ecoam os dilemas existenciais da humanidade. Já "The Court of the Crimson King" é grandiosa, quase mística, com seus coros épicos e progressões melódicas que evocam uma sensação de maravilha e mistério.\n\n' +
        'O trabalho de Robert Fripp na guitarra é revolucionário, misturando técnicas inovadoras com uma sensibilidade emocional única, enquanto a flauta de Ian McDonald e os vocais de Greg Lake trazem um equilíbrio perfeito entre a energia e a serenidade.\n\n' +
        'Este álbum não é apenas um marco na história do rock progressivo, mas uma jornada emocional que continua a inspirar músicos e ouvintes mais de cinco décadas após seu lançamento. É um disco essencial para qualquer amante de música, que prova que a arte sonora pode ser tanto intelectualmente desafiadora quanto profundamente emocional.',
      musica: 'I Talk to the Wind',
      createdAt: new Date('2025-01-25T12:00:00Z'),
      albumCoverPath: 'assets/in-the-court.jpg',
      reviewerPath: 'assets/person1.jpg'
    }
  ]

  getReviewById(id: string): Review | undefined {
    return this.reviews.find(review => review.id === id);
  }


}
