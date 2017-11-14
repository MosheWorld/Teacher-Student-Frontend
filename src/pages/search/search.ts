import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { FavoritesPage } from './../favorites/favorites';
import { CommonProvider } from './../../providers/common/common';
import { TeacherslistPage } from './../teacherslist/teacherslist';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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

  public teachesAtFormControl = new FormControl('', [Validators.required]);
  public teachesInstitutionsFormControl = new FormControl('', [Validators.required]);
  public genderFormControl = new FormControl('', [Validators.required]);

  public showErrorMessagePrices: boolean = false;
  public showErrorMessage: boolean = false;
  public matcher = new MyErrorStateMatcher();

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public commonProvider: CommonProvider) {
  }

  public searchTeachers() {
    this.showErrorMessage = false;
    this.showErrorMessagePrices = false;
    
    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    let searchTeacherModel = {
      fromPrice: this.structure.lower,
      toPrice: this.structure.upper,
      teachesAt: parseInt(this.teachesAtFormControl.value),
      teachesInstitutions: parseInt(this.teachesInstitutionsFormControl.value),
      gender: this.genderFormControl.value === 'Both' ? "" : this.genderFormControl.value
    };

    const loading = this.loadingCtrl.create({
      content: 'Getting teachers, please wait...'
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

  public getAllTeachers() {
    const loading = this.loadingCtrl.create({
      content: 'Getting teachers, please wait...'
    });
    loading.present();

    this.apiProvider.httpGet('teacher/getall')
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

  public goPage(page: any) {
    switch (page) {
      case 'favorites':
        this.navCtrl.push(FavoritesPage);
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }

  private isModelValid() {
    if (
      this.structure == null ||
      !this.genderFormControl.valid ||
      !this.teachesAtFormControl.valid ||
      this.structure.lower == null || this.structure.lower < 0 ||
      !this.teachesInstitutionsFormControl.valid ||
      this.structure.upper == null || this.structure.upper > 200 ||
      this.structure.lower > this.structure.upper) {
      if (this.structure.lower > this.structure.upper) {
        this.showErrorMessagePrices = true;
      }
      return false;
    } else {
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
