import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { 
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker } from "@ionic-native/google-maps";
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  obtenerPosicion():any {
    this.geolocation.getCurrentPosition().then(response =>{
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(postion: Geoposition){
    let latitude = postion.coords.latitude;
    let longitud = postion.coords.longitude;
    console.log(latitude, longitud);

    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    let myPosition: LatLng = new LatLng(latitude, longitud);

    let position: CameraPosition<any> = {
      target: myPosition,
      zoom: 18,
      tilt: 30
    };

    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('mapa is ready');
      map.moveCamera(position);

      let markerOptions: MarkerOptions = {
        position: myPosition,
        title: 'Here'
      };
      map.addMarker(markerOptions);
    })
  }

}
