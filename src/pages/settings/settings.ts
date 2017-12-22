import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { FavoritesPage } from './../favorites/favorites';
import { SocialUser } from 'angular4-social-login/entities/user';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  //#region Members
  public user: SocialUser;
  public attach:string;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritesManagerProvider: FavoritesManagerProvider,
    public apiProvider: ApiProvider, private authService: AuthService) {
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

  public SignInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((signedInUser: SocialUser) => {
        this.user = signedInUser;
        this.attach = JSON.stringify(signedInUser);
        this.apiProvider.httpPost('auth/createfacebookuser', this.user)
          .subscribe(
          (success) => { console.log(success); },
          (failure) => { console.log(failure); }
          );
      });
  }
  //#endregion
}
