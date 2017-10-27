import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-jointeacher',
  templateUrl: 'jointeacher.html',
})

export class JointeacherPage {
  public age: number; //
  public priceTo: number;
  public priceFrom: number;
  public phone: string; //
  public email: string; //
  public gender: string; //
  public lastName: string; //
  public firstName: string; //
  public personalMessage: string;
  public teachesAt: number;
  public teachesSubjects: number[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //   var data = {
  //   age: number;
  //   priceTo: number;
  //   priceFrom: number;
  //   phone: string;
  //   email: string;
  //   gender: string;
  //   lastName: string;
  //   firstName: string;
  //   personalMessage: string;
  //   teachesAt: TeachesAt;
  //   teachesSubjects: TeachesSubjects[];
  // };

  public test() {
    console.log(this.email);
    console.log(this.phone);
  }
}
