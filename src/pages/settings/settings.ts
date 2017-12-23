import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { FavoritesPage } from './../favorites/favorites';
import { SocialUser } from 'angular4-social-login/entities/user';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthService, GoogleLoginProvider } from "angular4-social-login";
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  //#region Members
  public user: SocialUser;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritesManagerProvider: FavoritesManagerProvider,
    public apiProvider: ApiProvider, private authService: AuthService, public profileProvider: ProfileProvider) {
  }
  //#endregion

  //#region Public Methods
  public goPage(page: any): void {
    switch (page) {
      case 'favorites':
        this.navCtrl.push(FavoritesPage);
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }

  public clearIDLocalStorage(): void {
    this.favoritesManagerProvider.removeAll();
  }

  public SignInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        console.log(user);
      });
  }
  //#endregion
}
