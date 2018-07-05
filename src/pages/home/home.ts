import { NavController } from 'ionic-angular';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { PageType } from './../../common/PageType.Enum';
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

  /**
   * Activated animations to make the UI awesome.
   */
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

  /**
   * Removes animated classes from the inputs.
   */
  public ionViewDidLeave() {
    this.rd.removeClass(this.subtitleAnimation.nativeElement, "animated");
    this.rd.removeClass(this.buttonuAnimation.nativeElement, "animated");
  }

  /**
   * Action when teacher clicks on join as teacher.
   */
  public joinAsTeacherButton() {
    if (this.profileProvider.isLoggedIn === true) {
      this.navigationer.navigateToPage(this.pageEnum.TeacherDetails);
    } else {
      this.navigationer.navigateToPage(this.pageEnum.JoinAsTeacher);
    }
  }
  //#endregion
}
