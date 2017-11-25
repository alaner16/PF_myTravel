import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../modelos/user";
import { TabsPage } from "../tabs/tabs";
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  

  registro(){
    console.log('hola pútito')
    // try{
    //   console.log('entre try');
    //   const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    //   this.navCtrl.setRoot(LoginPage);
    //   console.log(result)
    //   if(result){
    //     this.navCtrl.setRoot(LoginPage);
    //   }
    // }
    // catch(e){
    //   console.error(e)
    // }
   
  }

}
