import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { Chat } from "../pages/chat/chat";

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
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  
  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp(config)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Login', component: LoginPage},
      {title: 'Home', component:HomePage},
      { title: 'About', component: AboutPage},
      { title: 'Chat', component: Chat}
    ];  
  
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
