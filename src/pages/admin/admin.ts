import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})

export class AdminPage {
  //#region Members
  public currentChosenType = "1";
  //#endregion

  //#region Constructor
  constructor() { }
  //#endregion
}
