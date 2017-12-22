import { ProfileProvider } from './../providers/profile/profile';
import { Platform, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SearchPage } from './../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';

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
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public profileProvider: ProfileProvider) {
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

  public openPage(page) {
    this.nav.setRoot(page.component);
  }
  //#endregion
}
