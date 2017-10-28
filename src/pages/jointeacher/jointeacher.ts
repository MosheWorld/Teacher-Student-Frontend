import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';

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
  public teachesSubjects: number[] = [];
  public showErrorMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  public createTeacher() {
    this.setErrorMessage(false);

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

  private isModelValid() {
    if (this.priceFrom != null) { this.priceFrom = parseInt(this.priceFrom.toString()); }
    if (this.priceTo != null) { this.priceTo = parseInt(this.priceTo.toString()); }
    if (this.age != null) { this.age = parseInt(this.age.toString()); }

    if (
      this.teachesAt < 0 ||
      this.priceTo == null || this.priceTo > 1000 ||
      this.priceFrom == null || this.priceFrom < 0 ||
      this.priceFrom > this.priceTo ||
      this.age == null || this.age < 0 || this.age > 120 ||
      this.IsStringNullOrEmpty(this.phone) ||
      this.IsStringNullOrEmpty(this.email) ||
      this.IsStringNullOrEmpty(this.gender) ||
      this.IsStringNullOrEmpty(this.lastName) ||
      this.IsStringNullOrEmpty(this.firstName) ||
      this.IsStringNullOrEmpty(this.personalMessage) ||
      this.teachesSubjects == null || this.teachesSubjects.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  private setErrorMessage(set: boolean) {
    this.showErrorMessage = set;
  }

  private IsStringNullOrEmpty(str: string) {
    if (str == null || str === "") {
      return true;
    } else {
      return false;
    }
  }

  private createNewTeacherDataJson() {
    this.teachesAt = parseInt(this.teachesAt.toString());
    this.teachesSubjects.forEach((value, index) => {
      this.teachesSubjects[index] = parseInt(value.toString());
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
      teachesSubjects: this.teachesSubjects
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
