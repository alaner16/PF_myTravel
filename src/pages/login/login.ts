import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../auth/auth.service';
import { TabsPage } from "../tabs/tabs";
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';  
    this.navCtrl.push(TabsPage);
  }

  logout() {
    this.authService.logout();
  }

}