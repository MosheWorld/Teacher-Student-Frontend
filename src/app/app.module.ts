import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Ionic2RatingModule } from 'ionic2-rating';
import { NgModule, ErrorHandler } from '@angular/core';
import { ImageCompressService } from 'ng2-image-compress';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageModule } from 'angular-2-local-storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { AdminPage } from './../pages/admin/admin';
import { StatusBar } from '@ionic-native/status-bar';
import { GenderPipe } from './../pipes/gender/gender';
import { SearchPage } from './../pages/search/search';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from './../pages/settings/settings';
import { CommonProvider } from '../providers/common/common';
import { FavoritesPage } from './../pages/favorites/favorites';
import { ToasterProvider } from '../providers/toaster/toaster';
import { ContactusPage } from './../pages/contactus/contactus';
import { ProfileProvider } from '../providers/profile/profile';
import { TeachesAtPipe } from './../pipes/teaches-at/teaches-at';
import { TeacherslistPage } from './../pages/teacherslist/teacherslist';
import { SingleteacherPage } from './../pages/singleteacher/singleteacher';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { NewTeacherFormPage } from './../pages/new-teacher-form/new-teacher-form';
import { TeachesSubjectsPipe } from './../pipes/teaches-subjects/teaches-subjects';
import { NewTeacherLoginPage } from './../pages/new-teacher-login/new-teacher-login';
import { FavoritesManagerProvider } from '../providers/favorites-manager/favorites-manager';
import { TeachesInstitutionsPipe } from './../pipes/teaches-institutions/teaches-institutions';
import { TeacherPersonalDetailsPage } from './../pages/teacher-personal-details/teacher-personal-details';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RateShowComponent } from '../components/rate-show/rate-show';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    SearchPage,
    GenderPipe,
    SettingsPage,
    ContactusPage,
    FavoritesPage,
    TeachesAtPipe,
    TeacherslistPage,
    SingleteacherPage,
    RateShowComponent,
    NewTeacherFormPage,
    NewTeacherLoginPage,
    TeachesSubjectsPipe,
    TeachesInstitutionsPipe,
    TeacherPersonalDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    SocialLoginModule.initialize(config),
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
    LocalStorageModule.withConfig({
      prefix: 'StudyHub',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    AdminPage,
    SettingsPage,
    FavoritesPage,
    ContactusPage,
    TeacherslistPage,
    SingleteacherPage,
    NewTeacherFormPage,
    NewTeacherLoginPage,
    TeacherPersonalDetailsPage
  ],
  providers: [
    StatusBar,
    GenderPipe,
    ApiProvider,
    SplashScreen,
    TeachesAtPipe,
    CommonProvider,
    ToasterProvider,
    ProfileProvider,
    TeachesSubjectsPipe,
    LocalStorageProvider,
    ImageCompressService,
    TeachesInstitutionsPipe,
    FavoritesManagerProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }