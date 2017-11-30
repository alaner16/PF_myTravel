import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { PerfilPage } from "../perfil/perfil";
import { LoginPage } from "../login/login";
import { MapaPage } from "../mapa/mapa";
import { AngularFireModule } from "angularfire2";
import { AuthProvider } from "../../providers/auth/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(
    public authProvider: AuthProvider,
    public afm: AngularFireModule,
    public navCtrl: NavController, 
    private toast: ToastController, 
    private afAuth: AngularFireAuth) {
    
  }

  ionViewWillUnload(){
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewWillLoad(){
    
    this.afAuth.authState.subscribe(data =>{
      if ( data && data.email && data.uid){
        this.toast.create({
          message: `Bienvenido a MyTravelGuide, ${data.email}`,
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: 'No eres bienvenido',
          duration: 3000
        }).present();
        this.navCtrl.setRoot(LoginPage);
      }
    })
  }

  goToProfile(): void {
    this.navCtrl.push(PerfilPage);
  }

  salir(){
    this.afAuth.auth.signOut();
    this.navCtrl.push(LoginPage);    
  }
  // salir(){
  //   this.authProvider.logoutUser().then(() => {
  //     this.navCtrl.setRoot('LoginPage');
  //   });
  // }

  irMapa(){
    this.navCtrl.push(MapaPage);
  }

}
