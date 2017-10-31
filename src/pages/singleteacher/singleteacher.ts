import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-singleteacher',
  templateUrl: 'singleteacher.html',
})

export class SingleteacherPage {
  public teacher: any;

  public fullName: string;
  public email: string;
  public message: string;
  public rate: number;

  public showErrorMessage: boolean = false;
  public showRecommendationsBoolean: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.teacher = this.navParams.get('teacher');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public toggleRecommendations() {
    this.showRecommendationsBoolean = !this.showRecommendationsBoolean;
  }

  public addNewRecommend() {
    this.showErrorMessage = false;

    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    console.log("Good");
  }

  private isModelValid() {
    if (this.rate == null || this.rate < 0 || this.rate > 5 ||
      this.isStringNullOrEmpty(this.email) ||
      this.isStringNullOrEmpty(this.fullName) ||
      this.isStringNullOrEmpty(this.message)
    ) {
      return false;
    } else {
      return true;
    }
  }

  private isStringNullOrEmpty(str: string) {
    if (str == null || str === "") {
      return true;
    } else {
      return false;
    }
  }
}
