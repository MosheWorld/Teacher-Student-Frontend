import isEmail from 'validator/lib/isEmail';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { ToasterProvider } from './../../providers/toaster/toaster';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@IonicPage()
@Component({
  selector: 'page-singleteacher',
  templateUrl: 'singleteacher.html',
})

export class SingleteacherPage {
  public teacher: any;

  public fullNameFormControl = new FormControl('', [Validators.required]);
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public messageFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]);
  public rate: number = 3;

  public showErrorMessage: boolean = false;
  public showRecommendationsBoolean: boolean = false;
  public alreadyAddedRecommend: boolean = false;

  public isTeacherFavorited: boolean = false;
  @ViewChild('addRecommend') elAddRecommend: ElementRef;

  public matcher = new MyErrorStateMatcher();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public apiProvider: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public favoritesManagerProvider: FavoritesManagerProvider, public toasterProvider: ToasterProvider,
    public rd: Renderer2) {
    this.teacher = this.navParams.get('teacher');
    this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
  }

  public dismiss() {
    this.viewCtrl.dismiss(this.isTeacherFavorited);
  }

  public openRecommendations() {
    this.showRecommendationsBoolean = true;
  }

  public closeRecommendations() {
    this.rd.removeClass(this.elAddRecommend.nativeElement, "bounceInDown");
    this.rd.addClass(this.elAddRecommend.nativeElement, "bounceOutUp");
    setTimeout(() => {
      this.showRecommendationsBoolean = false;
    }, 1000);
  }

  public addNewRecommend() {
    this.showErrorMessage = false;

    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    let newRecommendData = {
      id: this.teacher._id,
      recommendData: {
        fullName: this.fullNameFormControl.value,
        email: this.emailFormControl.value,
        message: this.messageFormControl.value,
        rate: this.rate
      }
    };

    const loading = this.loadingCtrl.create({
      content: 'Adding your recommendation, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('teacher/addrecommend', newRecommendData)
      .subscribe(
      (success) => {
        loading.dismiss();
        const alert = this.createAlert('Your recommendation has been added', 'Thank you for posting recommendation for this teacher, thanks for making our community better.');
        alert.present();
        this.alreadyAddedRecommend = true;
        this.showRecommendationsBoolean = false;
        this.teacher.recommendations.push(newRecommendData.recommendData);
      },
      (failure) => {
        loading.dismiss();
        const alert = this.createAlert('Failed to add recommendation', 'The request has been failed for some reason, please try again later.');
        alert.present();
      });
  }

  public addFavorite() {
    this.favoritesManagerProvider.addID(this.teacher._id);
    this.isTeacherFavorited = true;
    this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been added to favorites.");
  }

  public removeFavorite() {
    this.favoritesManagerProvider.removeID(this.teacher._id);
    this.isTeacherFavorited = false;
    this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been removed from favorites.");
  }

  public openWhatsApp() {
    if (this.teacher && this.teacher.phone) {
      if ((this.teacher.phone).indexOf("972") !== -1) {
        window.open('https://api.whatsapp.com/send?phone=' + this.teacher.phone);
      } else if (this.teacher.phone[0] === "0") {
        let number = "972" + this.teacher.phone;
        window.open('https://api.whatsapp.com/send?phone=' + number);
      }
    }
  }

  private isModelValid() {
    this.convertRateToInteger();
    if (this.rate == null || this.rate < 0 || this.rate > 5 ||
      !this.emailFormControl.valid || !isEmail(this.emailFormControl.value) ||
      !this.fullNameFormControl.valid ||
      !this.messageFormControl.valid
    ) {
      return false;
    } else {
      return true;
    }
  }

  private convertRateToInteger() {
    if (this.rate != null) { this.rate = parseInt(this.rate.toString()); }
  }

  private createAlert(titleInput: string, subTitleInput: string) {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }
}
