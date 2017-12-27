import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { PageType } from './../../common/PageType.Enum';
import { Navigationer } from './../../common/Navigationer';
import { SocialUser } from 'angular4-social-login/entities/user';
import { ProfileProvider } from '../../providers/profile/profile';
import { Loading } from 'ionic-angular/components/loading/loading';
import { ProfileInterface } from '../../interface/Profile.interface';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@IonicPage()
@Component({
  selector: 'page-new-teacher-login',
  templateUrl: 'new-teacher-login.html',
})

export class NewTeacherLoginPage {
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
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public profileProvider: ProfileProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTeacherLoginPage');
  }
  //#endregion

  //#region Public Methods
  public signInWithFB(): void {
    const loading: Loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Verifying, please wait...'
    });
    loading.present();

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((signedInUser: SocialUser) => {
        this.user = signedInUser;
        this.createUser(signedInUser);

        this.apiProvider.httpPost('auth/createfacebookuser', this.user)
          .subscribe(
          (success) => { console.log(success); this.goToTeaherFormPage(loading); },
          (failure) => { console.log(failure); this.failureResponse(loading); }
          );
      });
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        console.log(user);
      });
  }
  //#endregion

  //#region Private Methods
  private createUser(user: SocialUser): void {
    let newUser: ProfileInterface = {
      email: user.email,
      photoUrl: user.photoUrl,
      lastName: user.lastName,
      firstName: user.firstName
    };
    this.profileProvider.SetUserLoggedIn(newUser);
  }

  private goToTeaherFormPage(loader: Loading): void {
    loader.dismiss();
    this.navCtrl.pop();
    this.navigationer.navigateToPage(this.pageEnum.NewTeacherForm);
  }

  private failureResponse(loader: Loading): void {
    loader.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Failed to create as teacher, please try again.',
      buttons: ['Ok']
    });
    alert.present();
  }
  //#endregion
}
