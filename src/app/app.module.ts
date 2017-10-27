import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ApiProvider } from '../providers/api/api';
import { StatusBar } from '@ionic-native/status-bar';
import { SearchPage } from './../pages/search/search';
import { ContactPage } from '../pages/contact/contact';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToasterProvider } from '../providers/toaster/toaster';
import { ContactusPage } from './../pages/contactus/contactus';
import { JointeacherPage } from './../pages/jointeacher/jointeacher';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    ContactPage,
    ContactusPage,
    JointeacherPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    ContactPage,
    ContactusPage,
    JointeacherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    ToasterProvider
  ]
})
export class AppModule { }
