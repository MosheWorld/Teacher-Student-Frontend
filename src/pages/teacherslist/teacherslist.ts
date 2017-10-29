import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SingleteacherPage } from './../singleteacher/singleteacher';

@IonicPage()
@Component({
  selector: 'page-teacherslist',
  templateUrl: 'teacherslist.html',
})

export class TeacherslistPage {
  public teachers: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.teachers = this.navParams.get('teacherSearchList');
  }

  public expandTeacherInformation(index: number) {
    let modal = this.modalCtrl.create(SingleteacherPage, { teacher: this.teachers[index] });
    modal.present();
  }
}
