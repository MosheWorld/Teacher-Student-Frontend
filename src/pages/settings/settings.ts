import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { FavoritesPage } from './../favorites/favorites';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritesManagerProvider: FavoritesManagerProvider,
    public apiProvider: ApiProvider) {
  }
  //#endregion

  //#region Public Methods
  public goPage(page: any) {
    switch (page) {
      case 'favorites':
        this.navCtrl.push(FavoritesPage);
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }

  public clearIDLocalStorage() {
    this.favoritesManagerProvider.removeAll();
  }

  public FaceBookAuth() {
    window.open(this.apiProvider.endPoint + "auth/facebook");
  }
  //#endregion
}
