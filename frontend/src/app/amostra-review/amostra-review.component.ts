import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../models/Review";
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular'
import { extractColors } from "extract-colors";

@Component({
  selector: 'app-amostra-review',
  templateUrl: './amostra-review.component.html',
  styleUrls: ['./amostra-review.component.scss'],
})
export class AmostraReviewComponent implements OnInit {

  @Input({required: true}) review! : Review;
  constructor(private navCtrl : NavController) { }
  dominante = "#000000";

  liked : boolean = false;


  async ngOnInit() {
    this.dominante = await this.corDominante();
  }

  get quantoTempoAtras() : string{
    const agora = new Date()
    const data = new Date(this.review.createdAt)
    const diferenca = agora.getTime() - data.getTime()
    const segundos = Math.floor(diferenca / 1000)
    const minutos = Math.floor(segundos / 60)
    const horas = Math.floor(minutos / 60)
    const dias = Math.floor(horas / 24)
    const meses = Math.floor(dias / 30)
    const anos = Math.floor(meses / 12)

    if(anos > 0){
      return `${anos} ano${anos > 1 ? 's' : ''} atrás`
    }
    if(meses > 0){
      return `${meses} mês${meses > 1 ? 'es' : ''} atrás`
    }
    if(dias > 0){
      return `${dias} dia${dias > 1 ? 's' : ''} atrás`
    }
    if(horas > 0){
      return `${horas} hora${horas > 1 ? 's' : ''} atrás`
    }
    if(minutos > 0){
      return `${minutos} minuto${minutos > 1 ? 's' : ''} atrás`
    }
    return `${segundos} segundo${segundos > 1 ? 's' : ''} atrás`
  }

  likeReview() {
    this.liked = !this.liked;
  }

  openComments(){
    
    
  }

  get comentarioAmostra() : string{
    return this.review.comentario.length > 260
      ? this.review.comentario.substring(0, 260) + '...'
      : this.review.comentario;
  }

  async corDominante(){
    return (await extractColors("../../assets/yeezus.jpg"))[0].hex;

  }



  verReviewCompleta(){
    console.log('Ver review completa')
    this.navCtrl.navigateForward(['/tabs/feed/review', this.review.id])
  }

}
