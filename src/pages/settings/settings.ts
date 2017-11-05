import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { FavoritesPage } from './../favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
public lat = 0;
public lang = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation) {
  }

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

  public test(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lang =  resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
