import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { Component } from '@angular/core';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-jointeacher',
  templateUrl: 'jointeacher.html',
})

export class JointeacherPage {
  public age: number;
  public priceTo: number;
  public priceFrom: number;
  public phone: string;
  public email: string;
  public gender: string;
  public lastName: string;
  public firstName: string;
  public personalMessage: string;
  public teachesAt: number;
  public teachesInstitutions: number[] = [];

  public showErrorMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  public createTeacher() {
    this.setErrorMessage(false);

    this.convertStringToInteger();
    if (!this.isModelValid()) {
      this.setErrorMessage(true);
      return;
    }

    let newTeacherData = this.createNewTeacherDataJson();

    const loading = this.loadingCtrl.create({
      content: 'Sending information, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('teacher/create', newTeacherData)
      .subscribe(
      (success) => {
        loading.dismiss();
        const alert = this.createAlert('Welcome new teacher', 'Your account has been created successfully, this is your teacher page, thank you and good luck.');
        alert.present();
      },
      (failure) => {
        loading.dismiss();
        const alert = this.createAlert('Something went wrong', 'Please try again later, we have some server issues.');
        alert.present();
      }
      );
  }

  private convertStringToInteger() {
    if (this.priceFrom != null) { this.priceFrom = parseInt(this.priceFrom.toString()); }
    if (this.priceTo != null) { this.priceTo = parseInt(this.priceTo.toString()); }
    if (this.age != null) { this.age = parseInt(this.age.toString()); }
  }

  private isModelValid() {
    if (
      this.teachesAt < 0 ||
      this.priceTo == null || this.priceTo > 200 ||
      this.priceFrom == null || this.priceFrom < 0 ||
      this.priceFrom > this.priceTo ||
      this.age == null || this.age < 0 || this.age > 120 ||
      this.isStringNullOrEmpty(this.phone) ||
      this.isStringNullOrEmpty(this.email) ||
      this.isStringNullOrEmpty(this.gender) ||
      this.isStringNullOrEmpty(this.lastName) ||
      this.isStringNullOrEmpty(this.firstName) ||
      this.isStringNullOrEmpty(this.personalMessage) ||
      this.teachesInstitutions == null || this.teachesInstitutions.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  private setErrorMessage(set: boolean) {
    this.showErrorMessage = set;
  }

  private isStringNullOrEmpty(str: string) {
    if (str == null || str === "") {
      return true;
    } else {
      return false;
    }
  }

  private createNewTeacherDataJson() {
    this.teachesAt = parseInt(this.teachesAt.toString());
    this.teachesInstitutions.forEach((value, index) => {
      this.teachesInstitutions[index] = parseInt(value.toString());
    })

    let newTeacher = {
      age: this.age,
      priceTo: this.priceTo,
      priceFrom: this.priceFrom,
      phone: this.phone,
      email: this.email,
      gender: this.gender,
      lastName: this.lastName,
      firstName: this.firstName,
      personalMessage: this.personalMessage,
      teachesAt: this.teachesAt,
      teachesInstitutions: this.teachesInstitutions
    };
    return newTeacher;
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
