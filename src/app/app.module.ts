//#region Ionic Angular
import { StatusBar } from '@ionic-native/status-bar';
import { NgModule, ErrorHandler } from '@angular/core';
import { ImageCompressService } from 'ng2-image-compress';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//#endregion

//#region External
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
//#endregion

//#region Components
import { RateShowComponent } from '../components/rate-show/rate-show';
import { AdminLogsComponent } from './../components/admin-logs/admin-logs';
import { AdminContactUsComponent } from './../components/admin-contact-us/admin-contact-us';
//#endregion

//#region Providers
import { ApiProvider } from '../providers/api/api';
import { CommonProvider } from '../providers/common/common';
import { ToasterProvider } from '../providers/toaster/toaster';
import { ProfileProvider } from '../providers/profile/profile';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { FavoritesManagerProvider } from '../providers/favorites-manager/favorites-manager';
//#endregion

//#region Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminPage } from './../pages/admin/admin';
import { SearchPage } from './../pages/search/search';
import { SettingsPage } from './../pages/settings/settings';
import { FavoritesPage } from './../pages/favorites/favorites';
import { ContactusPage } from './../pages/contactus/contactus';
import { TeacherslistPage } from './../pages/teacherslist/teacherslist';
import { SingleteacherPage } from './../pages/singleteacher/singleteacher';
import { NewTeacherFormPage } from './../pages/new-teacher-form/new-teacher-form';
import { NewTeacherLoginPage } from './../pages/new-teacher-login/new-teacher-login';
import { TeacherPersonalDetailsPage } from './../pages/teacher-personal-details/teacher-personal-details';
//#endregion

//#region Pipes
import { GenderPipe } from './../pipes/gender/gender';
import { TeachesAtPipe } from './../pipes/teaches-at/teaches-at';
import { TeachesSubjectsPipe } from './../pipes/teaches-subjects/teaches-subjects';
import { TeachesInstitutionsPipe } from './../pipes/teaches-institutions/teaches-institutions';
//#endregion

//#region Modules
import { HttpModule } from '@angular/http';
import { Ionic2RatingModule } from 'ionic2-rating';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AngularMaterialModule } from '../modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#endregion

//#region Configs
let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("200690180499086")
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("391786601238-qdgnckjfrqrbsqia2nup1ds4ecjsbora.apps.googleusercontent.com")
  }
]);
//#endregion

@NgModule({
  declarations: [
    GenderPipe,
    TeachesAtPipe,
    TeachesSubjectsPipe,
    TeachesInstitutionsPipe,

    RateShowComponent,
    AdminLogsComponent,
    AdminContactUsComponent,

    MyApp,
    HomePage,
    AdminPage,
    SearchPage,
    SettingsPage,
    ContactusPage,
    FavoritesPage,
    TeacherslistPage,
    SingleteacherPage,
    NewTeacherFormPage,
    NewTeacherLoginPage,
    TeacherPersonalDetailsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    Ionic2RatingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,

    SocialLoginModule.initialize(config),
    LocalStorageModule.withConfig({ prefix: 'StudyHub', storageType: 'localStorage' }),

    IonicModule.forRoot(MyApp, {
      locationStrategy: 'path'
    }, {
        links: [
          { component: HomePage, name: 'Home', segment: 'home' },
          { component: AdminPage, name: 'Admin', segment: 'admin' },
          { component: SearchPage, name: 'Search', segment: 'search' },
          { component: SettingsPage, name: 'Settings', segment: 'settings' },
          { component: ContactusPage, name: 'Contactus', segment: 'contactus' },
          { component: FavoritesPage, name: 'Favorites', segment: 'favorites' },
          { component: TeacherslistPage, name: 'Teacherslist', segment: 'teacherslist' },
          { component: SingleteacherPage, name: 'Singleteacher', segment: 'singleteacher' },
          { component: NewTeacherFormPage, name: 'NewTeacherForm', segment: 'newteacherform' },
          { component: NewTeacherLoginPage, name: 'NewTeacherLogin', segment: 'newteacherlogin' },
          { component: TeacherPersonalDetailsPage, name: "TeacherPersonalDetailsPage", segment: "teacherpersonaldetailspage" }
        ]
      }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,
    SearchPage,
    SettingsPage,
    ContactusPage,
    FavoritesPage,
    TeacherslistPage,
    SingleteacherPage,
    NewTeacherFormPage,
    NewTeacherLoginPage,
    TeacherPersonalDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImageCompressService,

    GenderPipe,
    TeachesAtPipe,
    TeachesSubjectsPipe,
    TeachesInstitutionsPipe,

    ApiProvider,
    CommonProvider,
    ToasterProvider,
    ProfileProvider,
    LocalStorageProvider,
    FavoritesManagerProvider,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }