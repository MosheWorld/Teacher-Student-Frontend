import * as _ from 'lodash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { SingleteacherPage } from './../singleteacher/singleteacher';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-teacherslist',
  templateUrl: 'teacherslist.html',
})

export class TeacherslistPage {
  //#region Members
  public teachers: any[] = [];
  public teachersListNotChange: any[] = [];
  //#endregion

  //#region Constructor
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public modalCtrl: ModalController,
    public favoritesManagerProvider: FavoritesManagerProvider
  ) {
    let tempArray = this.navParams.get('teacherSearchList');

    for (let item of tempArray) {
      this.getImageForTeacher(item);
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
  //#endregion

  //#region Public Methods
  /**
   * Opens teacher with his details.
   * @param index Teacher index at array.
   */
  public expandTeacherInformation(index: number): void {
    let modal = this.modalCtrl.create(SingleteacherPage, {
      teacher: this.teachers[index],
      subject: this.navParams.get('subject'),
      institute: this.navParams.get('institute')
    });

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

  /**
   * Filters on teachers when searching for teacher at searchbar.
   * @param event Angular event.
   */
  public onInput(event: any): void {
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

  // Implement strategy pattern here.
  /**
   * Sorts the array by some sort algorithm selected.
   * @param sortByType How to sort the array.
   */
  public sortByTeacherList(sortByType): void {
    if (sortByType != null && sortByType.length > 1) {
      if (sortByType === "Name") {
        this.sortByName();
      } else if (sortByType === "Rate") {
        this.sortByRate();
      } else if (sortByType === "Recommendations") {
        this.sortByRecommendations();
      } else if (sortByType === "RecommendationsRate") {
        this.sortByRecommendationsRate();
      }
    }
  }
  //#endregion

  //#region Private Methods
  /**
   * Sort by name algorithm.
   */
  private sortByName(): void {
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

  /**
   * Sort by rate algorithm.
   */
  private sortByRate(): void {
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

  /**
   * Sort by recommendations algorithm.
   */
  private sortByRecommendations(): void {
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

  /**
   * Sort by recommendations & rate algorithm.
   */
  private sortByRecommendationsRate(): void {
    this.teachers.sort((a, b) => {
      if (a.recommendations.length < b.recommendations.length) {
        return 1;
      }
      if (a.recommendations.length > b.recommendations.length) {
        return -1;
      } else {
        if (a.recommendations.length > b.recommendations.length) {
          return -1;
        } else if (a.recommendations.length < b.recommendations.length) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

  /**
   * Receives image for the tacher.
   * @param teacher Teacher object.
   */
  private async getImageForTeacher(teacher): Promise<void> {
    this.apiProvider.httpGet("image/getimagebyid/" + teacher.image)
      .subscribe(
      (success) => { teacher.image = success.image; },
      (failure) => { teacher.image = "assets\\imgs\\imageNotFound.jpg"; });
  }
  //#endregion
}
