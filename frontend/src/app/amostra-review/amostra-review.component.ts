import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../models/Review";

@Component({
  selector: 'app-amostra-review',
  templateUrl: './amostra.component.html',
  styleUrls: ['./amostra.component.scss'],
})
export class AmostraComponent implements OnInit {

  @Input({required: true}) review! : Review
  constructor() { }

  ngOnInit() {}

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

  get comentarioAmostra() : string{
    return this.review.comentario.length > 260
      ? this.review.comentario.substring(0, 260) + '...'
      : this.review.comentario;
  }

  void verReviewCompleta(){
    
  }

}
function verReviewCompleta() {
    throw new Error('Function not implemented.');
}

