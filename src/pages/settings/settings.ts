import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
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
  public pageEnum = PageType;
  public navigationer: Navigationer;

  public user: SocialUser;
  //#endregion

  //#region Constructor
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    private authService: AuthService,
    public profileProvider: ProfileProvider,
    public favoritesManagerProvider: FavoritesManagerProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
  }
  //#endregion

  //#region Public Methods
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
