import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor( public navCtrl: NavController, public slidingItem: ItemSliding) {

  }

  share(slidingItem: ItemSliding){
    // slidingItem.close();
  }

}
