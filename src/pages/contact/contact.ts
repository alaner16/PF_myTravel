// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-contact',
//   templateUrl: 'contact.html'
// })
// export class ContactPage {

//   constructor( public navCtrl: NavController) {

//   }

// }
import { Component } from '@angular/core';

import {NavController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  toUser:Object;

  constructor(public navCtrl: NavController) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Barack Obama'
    }
  }


}
