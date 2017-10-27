import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})

export class ContactusPage {
  public fullName: string;
  public email: string;
  public contactReason: string;
  public message: string;
  public showErrorMessage: boolean = false;;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  public isFormValid() {
    if (this.fullName == null ||
      this.fullName === "" ||
      this.email == null ||
      this.email === "" ||
      this.contactReason == null ||
      this.contactReason === "" ||
      this.message == null ||
      this.message === ""
    ) {
      return false;
    }
    else {
      return true;
    }
  }

  public sendContactUsForm() {
    this.setErrorMessage(false);
    if (!this.isFormValid()) {
      this.setErrorMessage(true);
      return;
    }

    let data = {
      fullName: this.fullName,
      email: this.email,
      contactReason: this.contactReason,
      message: this.message
    };

    const loading = this.loadingCtrl.create({
      content: 'Sending information, please wait...'
    });
    loading.present();
    
    this.apiProvider.httpPost('contactus/create', data)
      .subscribe((success) => {
        loading.dismiss();
        const alert = this.createAlert('Request send successfully', 'Your request to contact you sent successfully.We\'ll contact you as soon as possible, thank you.');
        alert.present();
        this.navCtrl.pop();
      }, (failure) => {
        loading.dismiss();
        const alert = this.createAlert('Request failed to send', 'The request has been failed for some reason, please try again later.');
        alert.present();
      });
  }

  public clearContactUsForm() {
    this.setErrorMessage(false);
    this.fullName = "";
    this.email = "";
    this.contactReason = "";
    this.message = "";
  }

  private setErrorMessage(set: boolean) {
    this.showErrorMessage = set;
  }

  private createAlert(titleInput: string, subTitleInput: string) {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }
}
