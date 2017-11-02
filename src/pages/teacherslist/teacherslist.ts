import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SingleteacherPage } from './../singleteacher/singleteacher';

@IonicPage()
@Component({
  selector: 'page-teacherslist',
  templateUrl: 'teacherslist.html',
})

export class TeacherslistPage {
  public teachersListNotChange: any[] = [];
  public teachers: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.teachers = this.navParams.get('teacherSearchList');
    this.teachersListNotChange = this.navParams.get('teacherSearchList').slice();
  }

  public expandTeacherInformation(index: number) {
    let modal = this.modalCtrl.create(SingleteacherPage, { teacher: this.teachers[index] });
    modal.present();
  }

  public onInput(event: any) {
    let val = event.target.value;

    if (val == null || val === '') {
      this.teachers = this.teachersListNotChange;
      return;
    }

    if (val && val.trim() !== '') {
      this.teachers = this.teachersListNotChange.filter(function (item) {
        return item.firstName.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}
