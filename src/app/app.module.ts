import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from  'angularfire2/auth';
import { AuthService } from '../auth/auth.service';
var config = {
  apiKey: "AIzaSyC6maaYwKCZMLU9bmFbkavS7UELl0cAXcg",
  authDomain: "mytravelguide-cacd1.firebaseapp.com",
  databaseURL: "https://mytravelguide-cacd1.firebaseio.com",
  projectId: "mytravelguide-cacd1",
  storageBucket: "mytravelguide-cacd1.appspot.com",
  messagingSenderId: "671971396257"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AuthService
  ]
})
export class AppModule {}
