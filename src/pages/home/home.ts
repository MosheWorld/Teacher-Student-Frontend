import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { ContactusPage } from './../contactus/contactus';
import { JointeacherPage } from './../jointeacher/jointeacher';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tabRef: Tabs = this.navCtrl.parent;

  constructor(public navCtrl: NavController) {
  }

  public goPage(page: any) {
    switch (page) {
      case 'search':
        this.tabRef.select(1);
        break;
      case 'contactme':
        this.navCtrl.push(ContactusPage);
        break;
      case 'joinasteacher':
        this.navCtrl.push(JointeacherPage);
        break;
      case 'favorites':
        console.log("Test fav");
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }
}
