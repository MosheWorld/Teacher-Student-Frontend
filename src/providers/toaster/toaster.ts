import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToasterProvider {

  //#region Constructor
  constructor(public toastCtrl: ToastController) { }
  //#endregion

  //#region Public Methods
  public presentToast(message: string, time: number = 2000, location: string = "buttom"): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: time,
      position: location
    });

    toast.present();
  }
  //#endregion
}
