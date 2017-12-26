import { PageType } from './../../common/PageType.Enum';
import { NavController } from 'ionic-angular';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { Navigationer } from './../../common/Navigationer';
import { ProfileProvider } from './../../providers/profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;

  @ViewChild('subtitleAnimation') subtitleAnimation: ElementRef;
  @ViewChild('buttonuAnimation') buttonuAnimation: ElementRef;
  //#endregion

  //#region Constructor
  constructor(
    public rd: Renderer2,
    public navCtrl: NavController,
    public profileProvider: ProfileProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
  }

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
}
