import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from "ionic-angular";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: string[];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  initializeItems() {
    this.items = [
      'Hotel Fiesta Inn',
      'Hotel Ibis',
      'Hotel Best Wenster',
      'Motel La Pasadita',
      'Motel La Oficina',
      'Bar Ricos',
      'Bar Chapo',
      'Restaurante Saul',
      'Restaurante Maviri',
      'Los Nachos',
      'Don Pancho',
      'Tortas Plebes'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  presentConfirm() {
    const alert = this.alertCtrl.create({
      title: 'FILTRO',
      message: 'Desea filtrar su busqueda?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Buy clicked');
            
          }
        }
      ] 
    });
    alert.present();
  }

}
