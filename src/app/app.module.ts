import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Ionic2RatingModule } from 'ionic2-rating';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ApiProvider } from '../providers/api/api';
import { StatusBar } from '@ionic-native/status-bar';
import { SearchPage } from './../pages/search/search';
import { ContactPage } from '../pages/contact/contact';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToasterProvider } from '../providers/toaster/toaster';
import { ContactusPage } from './../pages/contactus/contactus';
import { TeachesAtPipe } from './../pipes/teaches-at/teaches-at';
import { JointeacherPage } from './../pages/jointeacher/jointeacher';
import { TeacherslistPage } from './../pages/teacherslist/teacherslist';
import { SingleteacherPage } from './../pages/singleteacher/singleteacher';
import { TeachesInstitutionsPipe } from './../pipes/teaches-institutions/teaches-institutions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    ContactPage,
    ContactusPage,
    TeachesAtPipe,
    JointeacherPage,
    TeacherslistPage,
    SingleteacherPage,
    TeachesInstitutionsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    ContactPage,
    ContactusPage,
    JointeacherPage,
    TeacherslistPage,
    SingleteacherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    TeachesAtPipe,
    ToasterProvider,
    TeachesInstitutionsPipe
  ]
})
export class AppModule { }
