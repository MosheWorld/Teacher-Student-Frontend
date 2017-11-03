import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToasterProvider {

  constructor(public toastCtrl: ToastController) {
  }2000

  public presentToast(message: string, time: number = 2000, location: string = "buttom") {
    const toast = this.toastCtrl.create({
      message: message,
      duration: time,
      position: location
    });

    toast.present();
  }
}
