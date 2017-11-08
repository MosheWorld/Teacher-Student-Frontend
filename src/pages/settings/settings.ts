import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FavoritesPage } from './../favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public image;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  public test(){
    console.log(this.image);
  }
}
