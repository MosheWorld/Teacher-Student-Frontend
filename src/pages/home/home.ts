import { ContactusPage } from './../contactus/contactus';
import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private tabRef: Tabs = this.navCtrl.parent;

  constructor(public navCtrl: NavController) {
  }

  public goPage(page) {
    if (page === 'search') {
      this.tabRef.select(1);
    } else if (page === 'contactme') {
      console.log("a");
      this.navCtrl.push(ContactusPage);
    }
  }
}
