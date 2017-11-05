import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';
import { ToasterProvider } from './../../providers/toaster/toaster';

@IonicPage()
@Component({
  selector: 'page-singleteacher',
  templateUrl: 'singleteacher.html',
})

export class SingleteacherPage {
  public teacher: any;

  public fullName: string;
  public email: string;
  public message: string;
  public rate: number = 3;

  public showErrorMessage: boolean = false;
  public showRecommendationsBoolean: boolean = false;
  public alreadyAddedRecommend: boolean = false;

  public isTeacherFavorited: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public apiProvider: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public favoritesManagerProvider: FavoritesManagerProvider, public toasterProvider: ToasterProvider) {
    this.teacher = this.navParams.get('teacher');
    this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
    console.log(this.teacher);
  }

  public dismiss() {
    this.viewCtrl.dismiss(this.isTeacherFavorited);
  }

  public toggleRecommendations() {
    this.showRecommendationsBoolean = !this.showRecommendationsBoolean;
  }

  public addNewRecommend() {
    this.showErrorMessage = false;

    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    let newRecommendData = {
      "id": this.teacher._id,
      "recommendData": {
        "fullName": this.fullName,
        "email": this.email,
        "message": this.message,
        "rate": this.rate
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
    this.toasterProvider.presentToast("Teacher has been added to favorites.");
  }

  public removeFavorite() {
    this.favoritesManagerProvider.removeID(this.teacher._id);
    this.isTeacherFavorited = false;
    this.toasterProvider.presentToast("Teacher has been removed from favorites.");
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
      this.isStringNullOrEmpty(this.email) ||
      this.isStringNullOrEmpty(this.fullName) ||
      this.isStringNullOrEmpty(this.message)
    ) {
      return false;
    } else {
      return true;
    }
  }

  private isStringNullOrEmpty(str: string) {
    if (str == null || str === "") {
      return true;
    } else {
      return false;
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
