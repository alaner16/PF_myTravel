import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaDirectionsPage } from './mapa-directions';

@NgModule({
  declarations: [
    MapaDirectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaDirectionsPage),
  ],
})
export class MapaDirectionsPageModule {}
