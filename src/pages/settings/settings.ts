import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
import { ProfileProvider } from '../../providers/profile/profile';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;
  //#endregion

  //#region Constructor
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public profileProvider: ProfileProvider,
    public favoritesManagerProvider: FavoritesManagerProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
  }
  //#endregion

  //#region Public Methods
  /**
   * Remove all favorites from local storage.
   */
  public clearIDLocalStorage(): void {
    this.favoritesManagerProvider.removeAll();
  }
  //#endregion
}
