import { Component } from '@angular/core';
import { ImageCompressService } from 'ng2-image-compress';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoritesPage } from './../favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  public image;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public imgCompressService: ImageCompressService) {
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

  public readImageBase64($event) {
    ImageCompressService.filesToCompressedImageSource($event.target.inputValue.files).
      then((observableImages) => {
        observableImages.subscribe((compressedObject) => {
          this.image = compressedObject.compressedImage.imageDataUrl;
        }, (error) => {
          console.log("Error while converting");
        });
      });
  }

  public show() {
    console.log(this.image);
  }
}
