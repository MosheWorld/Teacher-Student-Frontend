import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private alertCtrl: AlertController) {
    platform.ready().then(() => {
      navigator.geolocation.getCurrentPosition((data => {
        console.log(data.coords);
        let alert = this.alertCtrl.create({
          title: 'Location',
          subTitle: data.coords.latitude + " " + data.coords.longitude,
          buttons: ['Dismiss']
        });
        alert.present();
      }));

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
