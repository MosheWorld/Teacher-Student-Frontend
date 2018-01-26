import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';

import { PageType } from './../../common/PageType.Enum';
import { ApiProvider } from './../../providers/api/api';
import { Navigationer } from './../../common/Navigationer';
import { Alert } from 'ionic-angular/components/alert/alert';
import { ProfileProvider } from '../../providers/profile/profile';
import { SingleteacherPage } from './../singleteacher/singleteacher';
import { FavoritesManagerProvider } from './../../providers/favorites-manager/favorites-manager';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})

export class FavoritesPage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;

  public teachers: any[] = [];
  public userHaveFavorites: boolean = false;
  //#endregion

  //#region Constructor
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public profileProvider: ProfileProvider,
    public favoritesManagerProvider: FavoritesManagerProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);
    let listOfTeacherID = this.favoritesManagerProvider.getFavorites();
    this.bootstrapFavoritePage(listOfTeacherID);
  }
  //#endregion

  //#region Public Methods
  /**
   * Opens favorites page with the teacher the user choose.
   * When the user dismiss the modal we detect it.
   * - If the user removed the teacher from his favorites list we'll remove the teacher from the view.
   */
  public expandTeacherInformation(index: number): void {
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
  private bootstrapFavoritePage(listOfTeacherID: any): void {
    if (listOfTeacherID == null || listOfTeacherID.length == 0) {
      this.userHaveFavorites = false;
    } else {
      this.userHaveFavorites = true;
      this.getTeachersByID(listOfTeacherID);
    }
  }

  private getTeachersByID(listOfTeacherID: any): void {
    let data = {
      "listOfTeacherID": listOfTeacherID
    };

    const loading = this.loadingCtrl.create({
      spinner: 'dots',
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

  private createAlert(titleInput: string, subTitleInput: string): Alert {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }

  /**
   * Attaches image to specific teacher async.
   * @param teacher Teacher ID
   */
  private async GetImageForTeacher(teacher): Promise<void> {
    this.apiProvider.httpGet("image/getimagebyid/" + teacher.image)
      .subscribe(
      (success) => { teacher.image = success.image; },
      (failure) => { teacher.image = "assets\\imgs\\imageNotFound.jpg"; });
  }
  //#endregion
}
