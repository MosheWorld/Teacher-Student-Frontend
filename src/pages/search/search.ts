import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { TeacherslistPage } from './../teacherslist/teacherslist';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  public brightness: number = 20;
  public saturation: number = 0;
  public warmth: number = 1300;
  public structure: any = { lower: 30, upper: 140 };

  public teachesAt: number;
  public teachesInstitutions: number;
  public gender: string = "Both";

  public showErrorMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  public searchTeachers() {
    this.setErrorMessage(false);

    this.convertStringToInteger();
    if (!this.isModelValid()) {
      this.setErrorMessage(true);
      return;
    }

    this.gender = this.gender === 'Both' ? "" : this.gender;

    let searchTeacherModel = {
      fromPrice: this.structure.lower,
      toPrice: this.structure.upper,
      teachesAt: this.teachesAt,
      teachesInstitutions: this.teachesInstitutions,
      gender: this.gender
    };

    const loading = this.loadingCtrl.create({
      content: 'Sending information, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('teacher/search', searchTeacherModel)
      .subscribe(
      (success) => {
        loading.dismiss();
        if (success && success.length > 0) {
          this.navCtrl.push(TeacherslistPage, { teacherSearchList: success });
          return;
        }
        const alert = this.createAlert('Couldn\'t find the teachers', 'Please make the search filters to aim to more options, the teachers you asked for doesn\'t exist yet.');
        alert.present();
      },
      (failure) => {
        loading.dismiss();
        const alert = this.createAlert('Request failed to send', 'The request has been failed for some reason, please try again later.');
        alert.present();
      }
      );
  }

  private convertStringToInteger() {
    if (this.teachesAt != null) { this.teachesAt = parseInt(this.teachesAt.toString()); }
    if (this.teachesInstitutions != null) { this.teachesInstitutions = parseInt(this.teachesInstitutions.toString()); }
  }

  private isModelValid() {
    if (
      this.structure == null ||
      this.gender == null || this.gender === "" ||
      this.teachesAt == null || this.teachesAt < 0 ||
      this.structure.lower == null || this.structure.lower < 0 ||
      this.teachesInstitutions == null || this.teachesInstitutions < 0 ||
      this.structure.upper == null || this.structure.upper > 200 ||
      this.structure.lower > this.structure.upper) {
      return false;
    } else {
      return true;
    }
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
