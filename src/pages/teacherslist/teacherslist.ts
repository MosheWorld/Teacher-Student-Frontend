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
  public orderByType: string;

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
      this.teachers = this.teachersListNotChange.filter((item) => {
        let fullName = item.firstName + " " + item.lastName;
        return fullName.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  public orderByTeacherList() {
    if (this.orderByType != null && this.orderByType.length > 1) {
      if (this.orderByType === "Name") {
        this.orderByName();
      } else if (this.orderByType === "Rate") {
        this.orderByRate();
      } else if (this.orderByType === "Recommendations") {
        this.orderByRecommendations();
      }
    }
  }

  private orderByName() {
    this.teachers.sort((a, b) => {
      let first = (a.firstName + " " + a.lastName).toLowerCase();
      let second = (b.firstName + " " + b.lastName).toLowerCase();

      if (first < second) {
        return -1;
      }
      if (first > second) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  private orderByRate() {
    this.teachers.sort((a, b) => {
      if (a.rate < b.rate) {
        return 1;
      }
      if (a.rate > b.rate) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  private orderByRecommendations() {
    this.teachers.sort((a, b) => {
      if (a.recommendations.length < b.recommendations.length) {
        return 1;
      }
      if (a.recommendations.length > b.recommendations.length) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
