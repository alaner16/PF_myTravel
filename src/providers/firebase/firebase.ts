import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }
  getInstitutosItems() {
    return this.afd.list('/Institutos/');
  }
 
  Registrar(name,cp,numero,colonia,calle,web) {
    this.afd.list('/Institutos/').push({
      nombre: name,
      cp: cp,
      numero:numero,
      colonia:colonia,
      calle:calle,
      web: web
    });
  }

  Publicar(lugar,categoria,cp,numero,colonia,calle,entrada,precio,descripcion) {
    this.afd.list('/Eventos/').push({
      lugar: lugar,
      categoria: categoria,
      cp: cp,
      numero:numero,
      colonia:colonia,
      calle:calle,
      entrada: entrada,
      precio: precio,
      descripcion: descripcion
    });
  } 

  removeItem(id) {
    this.afd.list('/Institutos/').remove(id);
  }

}
