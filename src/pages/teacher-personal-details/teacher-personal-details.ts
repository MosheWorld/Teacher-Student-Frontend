import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

import { AuthService } from 'angular4-social-login';
import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
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
      this.SaveAuthModelChanges();
    }
    this.authDisabledBoolean = !this.authDisabledBoolean;
  }

  /** 
   * Toggles the boolean field, and in case it switches from false to true we will execute changes saving to server.
  */
  public toggleDisabledTeacher() {
    if (this.teacherDisabledBoolean === false) {
      this.SaveTeacherModelChanges();
    }
    this.teacherDisabledBoolean = !this.teacherDisabledBoolean;
  }
  //#endregion

  //#region Private Methods
  /** 
   * Error function when receiving the teacher information fails.
  */
  private failureGetDataExecution() {
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
  private SaveAuthModelChanges() {
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
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Opens dialog and asks if the user wants to make the changes, in case he does a HTTP request with changes will occure.
   */
  private SaveTeacherModelChanges() {
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
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();
  }
  //#endregion
}
