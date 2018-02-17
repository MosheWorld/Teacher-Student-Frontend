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

  public user: ProfileInterface;
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
  /**
   * Logging in with facebook, using facebook API.
   */
  public signInWithFacebook(): void {
    const loading: Loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Verifying, please wait...'
    });
    loading.present();

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((signedInUser: SocialUser) => {
        // Receives necessary information, now sending it to backend and register at frontend.
         this.user = this.createUser(signedInUser);

        this.apiProvider.httpPost('auth/createnewuser', this.user)
          .subscribe(
            (success) => { console.log(success); this.goToTeaherFormPage(loading); },
            (failure) => { console.log(failure); this.failureResponse(loading); }
          );
      }, (error) => {
        console.log("Error occured when signing in to facebook.");
        console.log(error);
      });
  }

  /**
   * Logging in with google, using google API.
   */
  public signInWithGoogle(): void {
    const loading: Loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Verifying, please wait...'
    });
    loading.present();

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((signedInUser: SocialUser) => {
        // Receives necessary information, now sending it to backend and register at frontend.
        this.user = this.createUser(signedInUser);

        this.apiProvider.httpPost('auth/createnewuser', this.user)
          .subscribe(
            (success) => { console.log(success); this.goToTeaherFormPage(loading); },
            (failure) => { console.log(failure); this.failureResponse(loading); }
          );
      }, (error) => {
        console.log("Error occured when signing in to google.");
        console.log(error);
      });
  }
  //#endregion

  //#region Private Methods
  /**
   * Creates new profile interface of APP according to given social interface.
   * @param user Social model.
   * @returns {ProfileInterface} Returning this model to send to backend.
   */
  private createUser(user: SocialUser): ProfileInterface {
    let newUser: ProfileInterface = {
      role: 1,
      id: user.id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      lastName: user.lastName,
      provider: user.provider,
      firstName: user.firstName,
      authToken: user.authToken
    };

    this.profileProvider.SetUserLoggedIn(newUser);

    return newUser;
  }

  /**
   * Moves to another page and dismiss loading model
   * @param loader Ionic loader.
   */
  private goToTeaherFormPage(loader: Loading): void {
    loader.dismiss();
    this.navCtrl.pop();
    this.navigationer.navigateToPage(this.pageEnum.NewTeacherForm);
  }

  /**
   * Failure response for the user.
   * @param loader Ionic loader.
   */
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
