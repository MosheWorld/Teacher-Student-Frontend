import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
import { ProfileProvider } from './../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-teacher-personal-details',
  templateUrl: 'teacher-personal-details.html',
})
export class TeacherPersonalDetailsPage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController,
    public profileProvider: ProfileProvider) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
  }
  //#endregion
}
