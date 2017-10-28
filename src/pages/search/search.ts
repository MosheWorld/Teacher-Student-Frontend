import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public gender: string;

  public showErrorMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public searchTeachers() {
    this.setErrorMessage(false);

    this.convertStringToInteger();
    if (!this.isModelValid()) {
      this.setErrorMessage(true);
      return;
    }

    this.navCtrl.push(TeacherslistPage);
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
}
