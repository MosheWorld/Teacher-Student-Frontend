import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController,
    public profileProvider: ProfileProvider,
    public apiProvider: ApiProvider) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);

    this.GetTeacherInformationOfUser();
  }
  //#endregion

  //#region Public Methods
  public GetTeacherInformationOfUser() {
    this.apiProvider.httpGet('teacher/getteacherbytoken')
      .subscribe(
        (success) => { this.teacher = success; console.log(this.teacher); },
        (failure) => { console.log(failure); }
      );
  }
  //#endregion
}
