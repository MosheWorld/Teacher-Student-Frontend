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
  //#endregion

  //#region Public Methods
  /**
   * Logging in with facebook or Google provider, using facebook or google API.
   */
  public signIn(signInProvider: string): void {
    const loading: Loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Verifying, please wait...'
    });
    loading.present();

    let providerSignInMethod = this.getProviderMethod(signInProvider);

    if (providerSignInMethod === null) {
      console.log("Bad provider has been passed, aborting.");
      return;
    }

    this.authService.signIn(providerSignInMethod)
      .then((signedInUser: SocialUser) => {

        let isUserExistModel = {
          id: signedInUser.id,
          token: signedInUser.authToken,
          provider: signedInUser.provider
        }

        this.apiProvider.httpPost('auth/doesuserexistbyid', isUserExistModel)
          .subscribe(
            (success) => {
              this.ResultFromUserExistEndpoint(signedInUser, success, loading);
            },
            (failure) => { console.log(failure); loading.dismiss(); this.failureResponse(); }
          );

      }, (error) => {
        console.log("Error occured when signing in to " + signInProvider + ".");
        console.log(error);
        loading.dismiss();
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

    return newUser;
  }

  /**
   * Moves to another page and dismiss loading model
   * @param loader Ionic loader.
   */
  private goToTeaherFormPage(): void {
    this.navCtrl.pop();
    this.navigationer.navigateToPage(this.pageEnum.NewTeacherForm);
  }

  /**
   * Failure response for the user.
   * @param loader Ionic loader.
   */
  private failureResponse(): void {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Failed to create as teacher, please try again.',
      buttons: ['Ok']
    });
    alert.present();
  }

  /**
   * Decides on provider type and returns the actual variable to use it.
   * @param signInProvider 
   */
  private getProviderMethod(signInProvider: string): any {
    if (signInProvider === null || signInProvider === undefined) {
      console.log("signInProvider is null or empty.");
      return null;
    }

    let providerSignInMethod = null;

    switch (signInProvider) {
      case "FACEBOOK":
        providerSignInMethod = FacebookLoginProvider.PROVIDER_ID;
        break;
      case "GOOGLE":
        providerSignInMethod = GoogleLoginProvider.PROVIDER_ID;
        break;
      default:
        console.log("Provider wasn't found, aborting.");
        providerSignInMethod = null;
        break;
    }

    return providerSignInMethod;
  }

  /**
   * The function will be activated when result came from api of 'auth/doesuserexistbyid'.
   * @param success exist: {boolean} , role: {His role from database}
   */
  private ResultFromUserExistEndpoint(signedInUser: SocialUser, success: any, loading: Loading): void {
    this.user = this.createUser(signedInUser);

    // Exist is true, therefore we exist and we will be moved to details page.
    // Exist is false, therefore we will be moved to create new teacher
    if (success.exist === true) {

      this.user.role = success.role;
      this.profileProvider.SetUserLoggedIn(this.user);
      loading.dismiss();
      this.navigationer.navigateToPage(this.pageEnum.TeacherDetails);

    } else {

      this.profileProvider.SetUserLoggedIn(this.user);

      this.apiProvider.httpPost('auth/createnewuser', this.user)
        .subscribe(
          (success) => { console.log(success); loading.dismiss(); this.goToTeaherFormPage(); },
          (failure) => { console.log(failure); loading.dismiss(); this.failureResponse(); }
        );

    }
  }
  //#endregion
}
