import isEmail from 'validator/lib/isEmail';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { Alert } from 'ionic-angular/components/alert/alert';
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
  //#region Members
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

  public currentChosenType = "1";

  public searchedSubject: string = null;
  public searchedInstitute: string = null;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public apiProvider: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public favoritesManagerProvider: FavoritesManagerProvider, public toasterProvider: ToasterProvider,
    public rd: Renderer2) {
    this.teacher = this.navParams.get('teacher');
    this.searchedSubject = this.navParams.get('subject');
    this.searchedInstitute = this.navParams.get('institute');
    this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
  }
  //#endregion

  //#region Public Methods
  public dismiss(): void {
    this.viewCtrl.dismiss(this.isTeacherFavorited);
  }

  public openRecommendations(): void {
    this.showRecommendationsBoolean = true;
  }

  public closeRecommendations(): void {
    this.rd.removeClass(this.elAddRecommend.nativeElement, "bounceInDown");
    this.rd.addClass(this.elAddRecommend.nativeElement, "bounceOutUp");
    setTimeout(() => {
      this.showRecommendationsBoolean = false;
    }, 1000);
  }

  public addNewRecommend(): void {
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
      spinner: 'dots',
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

  public addFavorite(): void {
    this.favoritesManagerProvider.addID(this.teacher._id);
    this.isTeacherFavorited = true;
    this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been added to favorites.");
  }

  public removeFavorite(): void {
    this.favoritesManagerProvider.removeID(this.teacher._id);
    this.isTeacherFavorited = false;
    this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been removed from favorites.");
  }

  public openWhatsApp(): void {
    if (this.teacher && this.teacher.phone) {
      if ((this.teacher.phone).indexOf("972") !== -1) {
        window.open('https://api.whatsapp.com/send?phone=' + this.teacher.phone);
      } else if (this.teacher.phone[0] === "0") {
        let number = "972" + this.teacher.phone;
        window.open('https://api.whatsapp.com/send?phone=' + number);
      }
    }
  }
  //#endregion

  //#region Private Methods
  private isModelValid(): boolean {
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

  private convertRateToInteger(): void {
    if (this.rate != null) {
      this.rate = parseInt(this.rate.toString());
    }
  }

  private createAlert(titleInput: string, subTitleInput: string): Alert {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }
  //#endregion
}
