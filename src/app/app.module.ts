import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Ionic2RatingModule } from 'ionic2-rating';
import { NgModule, ErrorHandler } from '@angular/core';
import { ImageCompressService } from 'ng2-image-compress';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageModule } from 'angular-2-local-storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ApiProvider } from '../providers/api/api';
import { StatusBar } from '@ionic-native/status-bar';
import { GenderPipe } from './../pipes/gender/gender';
import { SearchPage } from './../pages/search/search';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from './../pages/settings/settings';
import { CommonProvider } from '../providers/common/common';
import { FavoritesPage } from './../pages/favorites/favorites';
import { ToasterProvider } from '../providers/toaster/toaster';
import { ContactusPage } from './../pages/contactus/contactus';
import { TeachesAtPipe } from './../pipes/teaches-at/teaches-at';
import { JointeacherPage } from './../pages/jointeacher/jointeacher';
import { TeacherslistPage } from './../pages/teacherslist/teacherslist';
import { SingleteacherPage } from './../pages/singleteacher/singleteacher';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { TeachesSubjectsPipe } from './../pipes/teaches-subjects/teaches-subjects';
import { FavoritesManagerProvider } from '../providers/favorites-manager/favorites-manager';
import { TeachesInstitutionsPipe } from './../pipes/teaches-institutions/teaches-institutions';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    GenderPipe,
    SettingsPage,
    ContactusPage,
    FavoritesPage,
    TeachesAtPipe,
    JointeacherPage,
    TeacherslistPage,
    SingleteacherPage,
    TeachesSubjectsPipe,
    TeachesInstitutionsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp),
    LocalStorageModule.withConfig({
      prefix: 'StudyHub',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    SettingsPage,
    FavoritesPage,
    ContactusPage,
    JointeacherPage,
    TeacherslistPage,
    SingleteacherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GenderPipe,
    ApiProvider,
    TeachesAtPipe,
    CommonProvider,
    ToasterProvider,
    TeachesSubjectsPipe,
    LocalStorageProvider,
    ImageCompressService,
    TeachesInstitutionsPipe,
    FavoritesManagerProvider
  ]
})
export class AppModule { }