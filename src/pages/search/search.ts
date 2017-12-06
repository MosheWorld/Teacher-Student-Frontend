import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

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
  //#region Members
  public brightness: number = 20;
  public saturation: number = 0;
  public warmth: number = 1300;
  public structure: any = { lower: 30, upper: 140 };

  public teachesSubjectsFormControl = new FormControl(null);
  public teachesAtFormControl = new FormControl(null);
  public teachesInstitutionsFormControl = new FormControl(null);
  public genderFormControl = new FormControl(null);

  public showErrorMessagePrices: boolean = false;
  public showErrorMessage: boolean = false;
  public matcher = new MyErrorStateMatcher();

  public filteredStates: Observable<any[]>;

  @ViewChild('getTeachersAnimation') getTeachersAnimation: ElementRef;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public commonProvider: CommonProvider,
    public rd: Renderer2) {
    this.filteredStates = this.teachesSubjectsFormControl.valueChanges
      .startWith(null)
      .map((subject) => subject ? this.filterStates(subject) : this.commonProvider.subjectsArray.slice());
  }

  public ionViewDidEnter() {
    setTimeout(() => {
      this.rd.removeClass(this.getTeachersAnimation.nativeElement, "m-opacity-0");
      this.rd.addClass(this.getTeachersAnimation.nativeElement, "fadeIn");
    }, 700);
  }
  //#endregion

  //#region Public Methods
  public filterStates(input: string) {
    return this.commonProvider.subjectsArray.filter((subject) =>
      subject.viewValue.toLowerCase().includes(input.toLowerCase()));
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
      teachesAt: this.teachesAtFormControl.value == null ? this.teachesAtFormControl.value : parseInt(this.teachesAtFormControl.value),
      teachesInstitutions: this.teachesInstitutionsFormControl.value == null ? this.teachesInstitutionsFormControl.value : parseInt(this.teachesInstitutionsFormControl.value),
      teachesSubjects: this.getSubjectID(),
      gender: this.genderFormControl.value == null ? this.genderFormControl.value : parseInt(this.genderFormControl.value)
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
  //#endregion

  //#region Private Methods
  private isModelValid() {
    if (
      this.structure == null ||
      !this.genderFormControl.valid ||
      !this.teachesAtFormControl.valid ||
      !this.teachesSubjectsFormControl.valid ||
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

  private getSubjectID() {
    let subjectID;

    if (this.teachesSubjectsFormControl.value != null) {
      subjectID = this.commonProvider.subjectsArray.find((data) => {
        return data.viewValue === this.teachesSubjectsFormControl.value;
      });
    }

    return subjectID == null ? null : parseInt(subjectID.value);
  }
  //#endregion
}
