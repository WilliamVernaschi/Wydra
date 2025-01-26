export interface Review {
    id: string;
    userId: string;
    nomeUsuario: string;
    avaliacao: number;
    comentario: string;
    musica: string;
    artista: string;
    createdAt: Date;
    albumCoverPath: string;
    reviewerPath: string;
}
