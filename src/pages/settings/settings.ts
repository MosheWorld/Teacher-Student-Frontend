import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { FavoritesPage } from './../favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public lat;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
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

  public test() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      this.lat = base64Image
    }, (err) => {
      // Handle error
    });
  }
}
