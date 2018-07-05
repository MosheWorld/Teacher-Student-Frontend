import { Platform, Nav, MenuController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SearchPage } from './../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';

import { AuthService } from 'angular4-social-login';
import { ProfileProvider } from './../providers/profile/profile';
import { TeacherPersonalDetailsPage } from './../pages/teacher-personal-details/teacher-personal-details';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  //#region Members
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  //#endregion

  //#region Constructor
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public menuCtrl: MenuController,
    public authService: AuthService,
    public splashScreen: SplashScreen,
    public profileProvider: ProfileProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Search', component: SearchPage },
        { title: 'Settings', component: SettingsPage }
      ];

    });
  }
  //#endregion

  //#region Public Methods
  /**
   * Sets the components to be root of the page.
   */
  public openPage(page) {
    this.nav.setRoot(page.component);
  }

  /**
   * Signed out from auth Service from NPM Package and from provier of Profile.
   */
  public signOut() {
    this.authService.signOut();
    this.profileProvider.setUserLoggedOut();
  }

  /**
   * Switches to use details page and close the menu.
   */
  public goToUserDetailsPage() {
    this.nav.setRoot(TeacherPersonalDetailsPage);
    this.menuCtrl.close();
  }
  //#endregion
}
