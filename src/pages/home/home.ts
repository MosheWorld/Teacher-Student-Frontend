import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { ContactusPage } from './../contactus/contactus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tabRef: Tabs = this.navCtrl.parent;

  constructor(public navCtrl: NavController) {
  }

  public goPage(page: any) {
    if (page === 'search') {
      this.tabRef.select(1);
    } else if (page === 'contactme') {
      this.navCtrl.push(ContactusPage);
    }
  }
}
