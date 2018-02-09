import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToasterProvider {

  //#region Constructor
  constructor(public toastCtrl: ToastController) { }
  //#endregion

  //#region Public Methods
  /**
   * Presents toast on screen of the device.
   * @param message Message of the toast.
   * @param time How much time it will be shown.
   * @param location Where the toast will be represented.
   */
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
