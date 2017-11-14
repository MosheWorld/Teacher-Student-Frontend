import isEmail from 'validator/lib/isEmail';
import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { CommonProvider } from './../../providers/common/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})

export class ContactusPage {

  public fullNameFormControl = new FormControl('', [Validators.required]);
  public contactReasonFormControl = new FormControl('', [Validators.required]);
  public messageFormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]);
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public showErrorMessage: boolean = false;
  public matcher = new MyErrorStateMatcher();

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public commonProvider: CommonProvider) {
  }

  public sendContactUsForm() {
    this.showErrorMessage = false;

    if (!this.isFormValid()) {
      this.showErrorMessage = true;
      return;
    }

    let data = {
      fullName: this.fullNameFormControl.value,
      email: this.emailFormControl.value,
      contactReason: this.contactReasonFormControl.value,
      message: this.messageFormControl.value
    };

    const loading = this.loadingCtrl.create({
      content: 'Sending the information, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('contactus/create', data)
      .subscribe(
      (success) => {
        loading.dismiss();
        const alert = this.createAlert('Request send successfully', 'Your request to contact you sent successfully.We\'ll contact you as soon as possible, thank you.');
        alert.present();
        this.navCtrl.pop();
      },
      (failure) => {
        loading.dismiss();
        const alert = this.createAlert('Request failed to send', 'The request has been failed for some reason, please try again later.');
        alert.present();
      });
  }

  public openWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=972542477052');
  }

  private isFormValid() {
    if (
      !this.fullNameFormControl.valid ||
      !this.emailFormControl.valid || !isEmail(this.emailFormControl.value) ||
      !this.contactReasonFormControl.valid ||
      !this.messageFormControl.valid) {
      return false;
    }
    else {
      return true;
    }
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
