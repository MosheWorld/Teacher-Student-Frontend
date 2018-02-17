import { NavController } from "ionic-angular/navigation/nav-controller";

import { PageType } from "./PageType.Enum";
import { SearchPage } from "../pages/search/search";
import { ContactusPage } from "../pages/contactus/contactus";
import { FavoritesPage } from "../pages/favorites/favorites";
import { ProfileProvider } from "../providers/profile/profile";
import { TeacherslistPage } from "../pages/teacherslist/teacherslist";
import { NewTeacherFormPage } from './../pages/new-teacher-form/new-teacher-form';
import { NewTeacherLoginPage } from './../pages/new-teacher-login/new-teacher-login';
import { TeacherPersonalDetailsPage } from './../pages/teacher-personal-details/teacher-personal-details';

export class Navigationer {
    //#region Constructor
    constructor(
        public navCtrl: NavController,
        public profileProvider: ProfileProvider
    ) { }
    //#endregion

    //#region Public Methods
    public navigateToPage(page: number, params: any = null): void {
        switch (page) {
            case PageType.Search:
                this.navCtrl.setRoot(SearchPage, params);
                break;

            case PageType.ContactUs:
                this.navCtrl.push(ContactusPage, params);
                break;

            case PageType.JoinAsTeacher:
                if (this.profileProvider.isLoggedIn == true) {
                    this.navCtrl.push(NewTeacherFormPage, params);
                } else {
                    this.navCtrl.push(NewTeacherLoginPage, params);
                }
                break;

            case PageType.Favorites:
                this.navCtrl.push(FavoritesPage, params);
                break;

            case PageType.TeacherList:
                this.navCtrl.push(TeacherslistPage, params);
                break;

            case PageType.NewTeacherForm:
                this.navCtrl.push(NewTeacherFormPage, params);
                break;

            case PageType.TeacherDetails:
                this.navCtrl.push(TeacherPersonalDetailsPage, params);
                break;

            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    }
    //#endregion
}