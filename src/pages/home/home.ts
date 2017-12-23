import { NavController } from 'ionic-angular';
import { SearchPage } from './../search/search';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { ContactusPage } from './../contactus/contactus';
import { ProfileProvider } from './../../providers/profile/profile';
import { NewTeacherFormPage } from './../new-teacher-form/new-teacher-form';
import { NewTeacherLoginPage } from './../new-teacher-login/new-teacher-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //#region Members
  @ViewChild('subtitleAnimation') subtitleAnimation: ElementRef;
  @ViewChild('buttonuAnimation') buttonuAnimation: ElementRef;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public rd: Renderer2, public profileProvider: ProfileProvider) { }

  public ionViewDidEnter() {
    setTimeout(() => {
      this.rd.removeClass(this.subtitleAnimation.nativeElement, "m-opacity-0");
      this.rd.addClass(this.subtitleAnimation.nativeElement, "fadeInDownBig");

      setTimeout(() => {
        this.rd.removeClass(this.buttonuAnimation.nativeElement, "m-opacity-0");
        this.rd.addClass(this.buttonuAnimation.nativeElement, "fadeInDownBig");

        setTimeout(() => {
          this.rd.removeClass(this.buttonuAnimation.nativeElement, "fadeInDownBig");
          this.rd.addClass(this.buttonuAnimation.nativeElement, "bounce");
        }, 2000);
      }, 800);
    }, 600);
  }

  public ionViewDidLeave() {
    this.rd.removeClass(this.subtitleAnimation.nativeElement, "animated");
    this.rd.removeClass(this.buttonuAnimation.nativeElement, "animated");
  }
  //#endregion

  //#region Public Methods
  public goPage(page: any): void {
    switch (page) {
      case 'search':
        this.navCtrl.setRoot(SearchPage);
        break;
      case 'contactme':
        this.navCtrl.push(ContactusPage);
        break;
      case 'joinasteacher':
        if (this.profileProvider.isLoggedIn == true) {
          this.navCtrl.push(NewTeacherFormPage);
        } else {
          this.navCtrl.push(NewTeacherLoginPage);
        }
        break;
      case 'favorites':
        this.navCtrl.push(FavoritesPage);
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }
  //#endregion
}
