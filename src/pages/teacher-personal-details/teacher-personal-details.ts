import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

import { AuthService } from 'angular4-social-login';
import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
import { CommonProvider } from './../../providers/common/common';
import { ProfileProvider } from './../../providers/profile/profile';
import { TeacherInterface } from '../../interface/Teacher.interface';

@IonicPage()
@Component({
  selector: 'page-teacher-personal-details',
  templateUrl: 'teacher-personal-details.html',
})

export class TeacherPersonalDetailsPage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;

  public teacher: TeacherInterface;
  public currentChosenTab = "1";

  public authDisabledBoolean = true;
  public teacherDisabledBoolean = true;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController,
    public authService: AuthService,
    public apiProvider: ApiProvider,
    public alertCtrl: AlertController,
    public commonProvider: CommonProvider,
    public profileProvider: ProfileProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);

    this.getTeacherInformationOfUser();
  }
  //#endregion

  //#region Public Methods
  /** 
   * Receives teacher model according to given user token.
  */
  public getTeacherInformationOfUser() {
    this.apiProvider.httpGet('teacher/getteacherbytoken')
      .subscribe(
        (success) => { this.teacher = success; },
        (failure) => { this.failureGetDataExecution(); }
      );
  }

  /** 
   * Toggles the boolean field, and in case it switches from false to true we will execute changes saving to server.
  */
  public toggleDisabledAuth() {
    if (this.authDisabledBoolean === false) {
      this.saveAuthModelChanges();
    }
    this.authDisabledBoolean = !this.authDisabledBoolean;
  }

  /** 
   * Toggles the boolean field, and in case it switches from false to true we will execute changes saving to server.
  */
  public toggleDisabledTeacher() {
    if (this.teacherDisabledBoolean === false) {
      this.saveTeacherModelChanges();
    }
    this.teacherDisabledBoolean = !this.teacherDisabledBoolean;
  }
  //#endregion

  //#region Private Methods
  /** 
   * Error function when receiving the teacher information fails.
  */
  private failureGetDataExecution(): void {
    this.authService.signOut();
    this.navigationer.navigateToPage(this.pageEnum.Home);

    let alert = this.alertCtrl.create({
      title: 'Something went wrong!',
      subTitle: 'While getting your teacher information something went wrong, please contact the developer, Sorry!',
      buttons: ['OK']
    });
    alert.present();
  }

  /**
   * Opens dialog and asks if the user wants to make the changes, in case he does a HTTP request with changes will occure.
   */
  private saveAuthModelChanges(): void {
    let alert = this.alertCtrl.create({
      title: 'Confirm the changes',
      message: 'Are you sure you want to save the user changes?  *You cannot restore your data after the change*',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.updateAuthModelAtServer();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Opens dialog and asks if the user wants to make the changes, in case he does a HTTP request with changes will occure.
   */
  private saveTeacherModelChanges(): void {
    let alert = this.alertCtrl.create({
      title: 'Confirm the changes',
      message: 'Are you sure you want to save the teacher changes?  *You cannot restore your data after the change*',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.updateTeacherModelAtServer();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Updates model at database.
   */
  private updateAuthModelAtServer(): void {
    if (!this.isAuthModelValidToUpdate()) {
      // Error Message
      return;
    }
  }

  /**
   * Updates model at database.
   */
  private updateTeacherModelAtServer(): void {
    if (!this.isTeacherModelValidToUpdate()) {
      // Error Message
      return;
    }

    // Update
  }

  /**
   * Validates whether the model can be updated and it's in correct format.
   */
  private isAuthModelValidToUpdate(): boolean {
    if (this.isPropertyNullOrUndefined(this.profileProvider.profile)
      || this.isStringNullOrUndefinedOrEmpty(this.profileProvider.profile.email)
      || this.isStringNullOrUndefinedOrEmpty(this.profileProvider.profile.firstName)
      || this.isStringNullOrUndefinedOrEmpty(this.profileProvider.profile.lastName)) {
      return false;
    }
    else {
      return true;
    }
  }

  /**
   * 
   */
  private isTeacherModelValidToUpdate(): boolean {
    if (this.isPropertyNullOrUndefined(this.teacher)
      || this.isPropertyNullOrUndefined(this.teacher.age)
      || this.isPropertyNullOrUndefined(this.teacher.priceFrom)
      || this.isPropertyNullOrUndefined(this.teacher.priceTo)
      || this.teacher.age < 18
      || this.teacher.priceFrom < 0 || this.teacher.priceFrom > 200
      || this.teacher.priceTo > 0 || this.teacher.priceTo > 200
      || this.teacher.priceFrom > this.teacher.priceTo
      || this.isStringNullOrUndefinedOrEmpty(this.teacher.firstName)
      || this.isStringNullOrUndefinedOrEmpty(this.teacher.lastName)
      || this.isStringNullOrUndefinedOrEmpty(this.teacher.email)
      || this.isStringNullOrUndefinedOrEmpty(this.teacher.personalMessage)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Checks whether the property is null or undefined.
   */
  private isPropertyNullOrUndefined(property: any): boolean {
    if (property === null || property === undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  /**
   * Checks whether the property is null or undefined or string is empty.
   */
  private isStringNullOrUndefinedOrEmpty(property: string): boolean {
    if (property === null || property === undefined || property === "") {
      return false;
    }
    else {
      return true;
    }
  }
  //#endregion
}
