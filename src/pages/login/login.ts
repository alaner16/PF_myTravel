// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AuthService } from '../../auth/auth.service';
// import { TabsPage } from "../tabs/tabs";
// import { User } from "../../modelos/user";
// import { RegistroPage } from "../registro/registro";
// import { AngularFireAuth } from "angularfire2/auth";


 

// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
//   email: string;
//   password: string;
//   user = {} as User;
//   constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
//   }
  
  
//   signup() {
//     this.authService.signup(this.email, this.password);
//     this.email = this.password = '';
//   }

//   async login(user: User) {
//     try{
//        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
//        console.log(result);
//        if(result){
//          this.navCtrl.push(TabsPage);
//        }
//     }
//     catch(e){
//       console.error(e);
//     }
    
//   }

//   logout() {
//     this.authService.logout();
//   }

//   registro(){
//     this.navCtrl.push(RegistroPage);
//   }
  

// }
import { Component } from '@angular/core';
import {
  Alert,
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import * as firebase from "firebase";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  ionViewDidEnter(){
    // this.navCtrl.setRoot(LoginPage);
  }

  

  goToSignup(): void {
    this.navCtrl.push('SignupPage');
  }

  goToResetPassword(): void {
    this.navCtrl.push('ResetPasswordPage');
  }

  loginUser(): void {
    console.log("entre");
    if (!this.loginForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.loginForm.value}`
      );
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authProvider.loginUser(email, password).then(
        authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(TabsPage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
}
