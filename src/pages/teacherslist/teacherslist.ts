import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teacherslist',
  templateUrl: 'teacherslist.html',
})

export class TeacherslistPage {
  public teachers: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teachers = this.navParams.get('teacherSearchList');
  }

  public expandTeacherInformation(index: number) {
    console.log(this.teachers[index]);
  }
}
