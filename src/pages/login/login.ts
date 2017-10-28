import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../auth/auth.service';
import { TabsPage } from "../tabs/tabs";
import { User } from "../../modelos/user";
import { RegistroPage } from "../registro/registro";
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  user = {} as User;
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }
  
  
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  async login(user: User) {
    try{
       const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
       console.log(result);
       if(result){
         this.navCtrl.push(TabsPage);
       }
    }
    catch(e){
      console.error(e);
    }
    
  }

  logout() {
    this.authService.logout();
  }

  registro(){
    this.navCtrl.push(RegistroPage);
  }
  

}