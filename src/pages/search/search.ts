import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Observable } from 'rxjs/Observable';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
import { Alert } from 'ionic-angular/components/alert/alert';
import { CommonProvider } from './../../providers/common/common';
import { ProfileProvider } from '../../providers/profile/profile';

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
  public pageEnum = PageType;
  public navigationer: Navigationer;

  public brightness: number = 20;
  public saturation: number = 0;
  public warmth: number = 1300;
  public structure: any = { lower: 30, upper: 140 };

  public genderFormControl = new FormControl(null);
  public teachesAtFormControl = new FormControl(null);
  public teachesSubjectsFormControl = new FormControl(null);
  public teachesInstitutionsFormControl = new FormControl(null);

  public showErrorMessagePrices: boolean = false;
  public showErrorMessage: boolean = false;
  public matcher = new MyErrorStateMatcher();

  public filteredStates: Observable<any[]>;

  @ViewChild('getTeachersAnimation') getTeachersAnimation: ElementRef;
  //#endregion

  //#region Constructor
  constructor(
    public rd: Renderer2,
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public commonProvider: CommonProvider,
    public profileProvider: ProfileProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);

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
  public filterStates(input: string): any[] {
    return this.commonProvider.subjectsArray.filter((subject) =>
      subject.viewValue.toLowerCase().includes(input.toLowerCase()));
  }

  public searchTeachers(): void {
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
      spinner: 'dots',
      content: 'Getting teachers, please wait...'
    });
    loading.present();

    let searchedSubject = this.getsearchedSubject();
    let searchedInstitute = this.getsearchedInstitute();

    this.apiProvider.httpPost('teacher/search', searchTeacherModel)
      .subscribe(
      (success) => {
        loading.dismiss();
        if (success && success.length > 0) {
          this.navigationer.navigateToPage(this.pageEnum.TeacherList, {
            teacherSearchList: success,
            subject: searchedSubject,
            institute: searchedInstitute
          });

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

  public getAllTeachers(): void {
    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting teachers, please wait...'
    });
    loading.present();

    this.apiProvider.httpGet('teacher/getall')
      .subscribe(
      (success) => {
        loading.dismiss();
        if (success && success.length > 0) {
          this.navigationer.navigateToPage(this.pageEnum.TeacherList, { teacherSearchList: success });

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
  //#endregion

  //#region Private Methods
  private isModelValid(): boolean {
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

  private createAlert(titleInput: string, subTitleInput: string): Alert {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }

  private getSubjectID(): number {
    let subjectID;

    if (this.teachesSubjectsFormControl.value != null) {
      subjectID = this.commonProvider.subjectsArray.find((data) => {
        return data.viewValue === this.teachesSubjectsFormControl.value;
      });
    }

    return subjectID == null ? null : parseInt(subjectID.value);
  }

  private getsearchedSubject(): any {
    let result = null;

    if (this.teachesSubjectsFormControl.value && this.teachesSubjectsFormControl.value != null && this.teachesSubjectsFormControl.value !== "") {
      result = this.teachesSubjectsFormControl.value;
    }

    if (result && result != "") {
      result = this.commonProvider.subjectsArray.find((data) => {
        return data.viewValue === this.teachesSubjectsFormControl.value;
      });
      result = result.value;
    }

    return result;
  }

  private getsearchedInstitute(): any {
    let result = null;

    if (this.teachesInstitutionsFormControl.value && this.teachesInstitutionsFormControl.value != null && this.teachesInstitutionsFormControl.value !== "") {
      result = this.teachesInstitutionsFormControl.value;
    }

    return result;
  }
  //#endregion
}
