import * as _ from 'lodash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SingleteacherPage } from './../singleteacher/singleteacher';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-teacherslist',
  templateUrl: 'teacherslist.html',
})

export class TeacherslistPage {
  public teachersListNotChange: any[] = [];
  public teachers: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public favoritesManagerProvider: FavoritesManagerProvider) {
    let tempArray = this.navParams.get('teacherSearchList');

    for (let item of tempArray) {
      if (this.favoritesManagerProvider.isIDExist(item._id)) {
        item.isTeacherFavorited = true;
      } else {
        item.isTeacherFavorited = false;
      }
    }

    this.teachers = _.sortBy(tempArray, [function (o) {
      return o.firstName;
    }])
    this.teachersListNotChange = this.teachers.slice();
  }

  public expandTeacherInformation(index: number) {
    let modal = this.modalCtrl.create(SingleteacherPage, { teacher: this.teachers[index] });
    modal.onDidDismiss((data) => {
      this.teachers[index].isTeacherFavorited = data;
      for (let teacher of this.teachersListNotChange) {
        if (teacher._id === this.teachers[index]._id) {
          teacher.isTeacherFavorited = data;
          break;
        }
      }
    });
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
