import { NewTeacherFormPage } from './../new-teacher-form/new-teacher-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { SocialUser } from 'angular4-social-login/entities/user';
import { ProfileProvider } from '../../providers/profile/profile';
import { ProfileInterface } from '../../interface/Profile.interface';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@IonicPage()
@Component({
  selector: 'page-new-teacher-login',
  templateUrl: 'new-teacher-login.html',
})

export class NewTeacherLoginPage {
  //#region Members
  public user: SocialUser;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    private authService: AuthService, public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTeacherLoginPage');
  }
  //#endregion

  //#region Public Methods
  public SignInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((signedInUser: SocialUser) => {
        this.user = signedInUser;
        this.CreateUser(signedInUser);
        this.apiProvider.httpPost('auth/createfacebookuser', this.user)
          .subscribe(
          (success) => { console.log(success); this.navCtrl.pop(); this.navCtrl.push(NewTeacherFormPage); },
          (failure) => { console.log(failure); }
          );
      });
  }
  //#endregion

  //#region Private Methods
  private CreateUser(user: SocialUser) {
    let newUser: ProfileInterface = {
      email: user.email,
      photoUrl: user.photoUrl,
      lastName: user.lastName,
      firstName: user.firstName
    };
    this.profileProvider.SetUserLoggedIn(newUser);
  }
  //#endregion
}
