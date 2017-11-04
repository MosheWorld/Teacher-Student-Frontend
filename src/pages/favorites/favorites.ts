import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})

export class FavoritesPage {
  private tabRef: Tabs = this.navCtrl.parent;
  public userHaveFavorites: boolean = false;

  public teachers: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritesManagerProvider: FavoritesManagerProvider,
    public apiProvider: ApiProvider) {
    let listOfTeacherID = this.favoritesManagerProvider.getFavorites();
    this.bootstrapFavoritePage(listOfTeacherID);
  }

  public goPage(page: any) {
    switch (page) {
      case 'search':
        this.navCtrl.pop();
        this.tabRef.select(1);
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }

  private bootstrapFavoritePage(listOfTeacherID: any) {
    if (listOfTeacherID == null || listOfTeacherID.length == 0) {
      this.userHaveFavorites = false;
    } else {
      this.userHaveFavorites = true;
      this.getTeachersByID(listOfTeacherID);
    }
  }

  private getTeachersByID(listOfTeacherID: any) {
    let data = {
      "listOfTeacherID": listOfTeacherID
    };
    this.apiProvider.httpPost('teacher/getlistofteachersbyid', data)
      .subscribe(
      (teachersList) => {
        this.teachers = teachersList;
      },
      (failure) => {
        console.log(failure);
      });
  }
}
