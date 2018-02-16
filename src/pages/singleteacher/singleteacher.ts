import isEmail from 'validator/lib/isEmail';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { Alert } from 'ionic-angular/components/alert/alert';
import { ToasterProvider } from './../../providers/toaster/toaster';
import { RecommendInterface } from './../../interface/Recommend.interface';
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
  constructor(
    public rd: Renderer2,
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toasterProvider: ToasterProvider,
    public favoritesManagerProvider: FavoritesManagerProvider
  ) {
    this.teacher = this.navParams.get('teacher');
    this.searchedSubject = this.navParams.get('subject');
    this.searchedInstitute = this.navParams.get('institute');
    this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
    this.getRecommendationsForTeacher();
  }
  //#endregion

  //#region Public Methods
  /**
   * Close the modal with teacher info if he is favorited or not, to remove from favorite list or not.
   */
  public dismiss(): void {
    this.viewCtrl.dismiss(this.isTeacherFavorited);
  }

  /**
   * Opens recommendation section.
   */
  public openRecommendations(): void {
    this.showRecommendationsBoolean = true;
  }

  /**
   * Close recommendation section.
   */
  public closeRecommendations(): void {
    this.rd.removeClass(this.elAddRecommend.nativeElement, "bounceInDown");
    this.rd.addClass(this.elAddRecommend.nativeElement, "bounceOutUp");
    setTimeout(() => {
      this.showRecommendationsBoolean = false;
    }, 1000);
  }

  /**
   * Creates new recommendation and send it to back-end.
   */
  public addNewRecommend(): void {
    this.showErrorMessage = false;

    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    let newRecommendation: RecommendInterface = this.buildNewRecommendation();

    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Adding your recommendation, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('recommendation/create', newRecommendation)
      .subscribe(
        (success) => {
          loading.dismiss();
          const alert = this.createAlert('Your recommendation has been added', 'Thank you for posting recommendation for this teacher, thanks for making our community better.');
          alert.present();
          this.alreadyAddedRecommend = true;
          this.showRecommendationsBoolean = false;
          this.teacher.recommendations.push(newRecommendation);
        },
        (failure) => {
          loading.dismiss();
          const alert = this.createAlert('Failed to add recommendation', 'The request has been failed for some reason, please try again later.');
          alert.present();
        });
  }

  /**
   * Adds new favorite teacher to list and shows toast.
   */
  public addFavorite(): void {
    this.favoritesManagerProvider.addID(this.teacher._id);
    this.isTeacherFavorited = true;
    this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been added to favorites.");
  }

  /**
   * Remove teacher from favorites list and shows toast.
   */
  public removeFavorite(): void {
    this.favoritesManagerProvider.removeID(this.teacher._id);
    this.isTeacherFavorited = false;
    this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been removed from favorites.");
  }

  /**
   * Open whatsapp application with teacher number.
   */
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
  /**
   * Validates whether the model is valid.
   * @returns True or false if the model is valid.
   */
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

  /**
   * Convert string rate to integer rate.
   */
  private convertRateToInteger(): void {
    if (this.rate != null) {
      this.rate = parseInt(this.rate.toString());
    }
  }

  /**
   * Creates ionic alert dialog.
   * @param titleInput Title of the dialog.
   * @param subTitleInput Sub-Title of the dialog.
   */
  private createAlert(titleInput: string, subTitleInput: string): Alert {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }

  /**
   * Creates new object of recommendation.
   * @returns {RecommendInterface} Recommendation model.
   */
  private buildNewRecommendation(): RecommendInterface {
    let newRecommendation: RecommendInterface = {
      teacherID: this.teacher._id,
      rate: this.rate,
      email: this.emailFormControl.value,
      message: this.messageFormControl.value,
      fullName: this.fullNameFormControl.value
    };

    return newRecommendation;
  }

  /** 
   * Gets recommendations from backend by list of ID's of recommendations.
  */
  private getRecommendationsForTeacher() {
    this.apiProvider.httpGet('recommendation/getrecommendationbyid/' + this.teacher._id)
      .subscribe(
        (recommendationsList) => {
          this.teacher.recommendations = recommendationsList;
        }, (failure) => {
          this.teacher.recommendations = null;
        });
  }
  //#endregion
}
