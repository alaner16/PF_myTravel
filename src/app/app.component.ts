import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyC6maaYwKCZMLU9bmFbkavS7UELl0cAXcg",
  authDomain: "mytravelguide-cacd1.firebaseapp.com",
  databaseURL: "https://mytravelguide-cacd1.firebaseio.com",
  projectId: "mytravelguide-cacd1",
  storageBucket: "mytravelguide-cacd1.appspot.com",
  messagingSenderId: "671971396257"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp(config)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
