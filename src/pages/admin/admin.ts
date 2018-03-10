import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
import { ProfileProvider } from './../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileProvider: ProfileProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
  }
  //#endregion
}
