import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, ItemSliding } from 'ionic-angular';
import { MyApp } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { Camera } from "@ionic-native/camera";
import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMaps } from "@ionic-native/google-maps";
import { HttpModule } from "@angular/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { RegistroPage } from "../pages/registro/registro";
import { PerfilPage } from "../pages/perfil/perfil";
import { MapaPage } from "../pages/mapa/mapa";
import { MapaDirectionsPage } from "../pages/mapa-directions/mapa-directions";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from  'angularfire2/auth';
import { AuthService } from '../auth/auth.service';
import { IonicImageViewerModule } from "ionic-img-viewer";
import { AuthProvider } from "../providers/auth/auth";
import { ProfileProvider } from "../providers/profile/profile";
import { EventProvider } from "../providers/event/event";
import { EmojiProvider } from '../providers/emoji/emoji';
import { ChatService, ChatMessage } from "../providers/chat/chat";
const config = {
  apiKey: "AIzaSyC6maaYwKCZMLU9bmFbkavS7UELl0cAXcg",
  authDomain: "mytravelguide-cacd1.firebaseapp.com",
  databaseURL: "https://mytravelguide-cacd1.firebaseio.com",
  projectId: "mytravelguide-cacd1",
  storageBucket: "mytravelguide-cacd1.appspot.com",
  messagingSenderId: "671971396257"
};

// const routes: Routes = [
//   { path: '', component: MyApp}
// ]

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    RegistroPage,
    PerfilPage,
    MapaPage,
    MapaDirectionsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHidenOnSubPages: true,
      tabsLayout: 'icon-left'
    }),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    IonicImageViewerModule,
    // RouterModule.forRoot(routes),
    // LoginPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistroPage,
    PerfilPage,
    MapaPage,
    MapaDirectionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemSliding,
    {provide: ErrorHandler,  useClass: IonicErrorHandler},
    EmojiProvider,
    AuthService,
    Camera,
    Geolocation,
    GoogleMaps,
    AuthProvider,
    AngularFireDatabaseProvider,
    ProfileProvider,
    EventProvider,
    ChatService,
    ChatMessage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

