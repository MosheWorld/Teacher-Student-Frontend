import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ModalController, LoadingController, AlertController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { SingleteacherPage } from './../singleteacher/singleteacher';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})

export class FavoritesPage {
  //#region Members
  private tabRef: Tabs = this.navCtrl.parent;
  public userHaveFavorites: boolean = false;

  public teachers: any[] = [];
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritesManagerProvider: FavoritesManagerProvider,
    public apiProvider: ApiProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    let listOfTeacherID = this.favoritesManagerProvider.getFavorites();
    this.bootstrapFavoritePage(listOfTeacherID);
  }
  //#endregion

  //#region Public Methods
  public goPage(page: any) {
    switch (page) {
      case 'search':
        this.navCtrl.pop();
        this.tabRef.select(1);
        break;
      default:
        console.log('Not found the requested page ' + page);
        break;
    }
  }

  public expandTeacherInformation(index: number) {
    let modal = this.modalCtrl.create(SingleteacherPage, { teacher: this.teachers[index] });
    modal.onDidDismiss((data) => {
      if (data === false) {
        this.teachers.splice(index, 1);
        if (this.teachers.length === 0) {
          this.userHaveFavorites = false;
        }
      }
    });
    modal.present();
  }
  //#endregion

  //#region Private Methods
  private bootstrapFavoritePage(listOfTeacherID: any) {
    if (listOfTeacherID == null || listOfTeacherID.length == 0) {
      this.userHaveFavorites = false;
    } else {
      this.userHaveFavorites = true;
      this.getTeachersByID(listOfTeacherID);
    }
  }

  private getTeachersByID(listOfTeacherID: any) {
    let data = {
      "listOfTeacherID": listOfTeacherID
    };

    const loading = this.loadingCtrl.create({
      content: 'Loading favorites, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('teacher/getlistofteachersbyid', data)
      .subscribe(
      (teachersList) => {
        teachersList = teachersList.filter((teacher) => { return teacher != null; });
        this.teachers = teachersList;

        for (let teacher of this.teachers) {
          this.GetImageForTeacher(teacher);
        }

        loading.dismiss();
      },
      (failure) => {
        const alert = this.createAlert('Couldn\'t load the favorites teachers', 'There was some problem, we couldn\'t load the favorite teachers, please try again later.');
        alert.present();
      });
  }

  private createAlert(titleInput: string, subTitleInput: string) {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }

  private async GetImageForTeacher(teacher) {
    this.apiProvider.httpGet("image/getimagebyid/" + teacher.image)
      .subscribe(
      (success) => { teacher.image = success.image; },
      (failure) => { teacher.image = "assets\\imgs\\imageNotFound.jpg"; });
  }
  //#endregion
}
