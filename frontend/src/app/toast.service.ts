import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';


@Injectable({
  providedIn: 'root'
})
export class ToastService{

  constructor(private toastCtrl : ToastController) { }

  async success(message : string){
    const successToast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
      color: 'success'
    });

    successToast.present();
  }

  async failure(message : string){
    const errorToast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
      color: 'danger'
    });

    errorToast.present();
  }

  async info(message : string){
    const infoToast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
      color: 'medium'
    });

    infoToast.present();
  }
}
