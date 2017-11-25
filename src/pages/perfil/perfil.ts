import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import firebase from 'firebase';
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";
import { EventProvider } from "../../providers/event/event";
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public eventListRef: firebase.database.Reference;
  
  public currentEvent: any = {};
  guestName: string;
  public userProfile: any;
  public birthDate: string;
  guestPicture: string;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
    public cameraPlugin: Camera,
    public eventProvider: EventProvider
  ) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.eventListRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}/eventList`);
      }
    });
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: 'Nombre(s) y Apellidos',
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Nombre(s)',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Apellidos',
          value: this.userProfile.lastName
        }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate: string): void {
    this.profileProvider.updateDOB(birthDate);
  }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newEmail', placeholder: 'Nuevo Correo' },
        { name: 'password', placeholder: 'Nueva Contraseña', type: 'password' },
        { name: 'confPassword', placeholder: 'Confirme Contraseña', type: 'password' }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            if(data.newEmail == data.confPassword){
              this.profileProvider
              .updateEmail(data.newEmail, data.password )
              .then(() => {
                console.log('Correo actualizado correctamente');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
            }else{
              console.log("ERROR...diferente contraseña")
            }
            
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'oldPassword', placeholder: 'Contraseña anterior', type: 'password' },
        { name: 'newPassword', placeholder: 'Nueva Contraseña', type: 'password' },        
        { name: 'confPassword', placeholder: "Confirme Contraseña", type: 'password'}
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          
          text: 'Guardar',
          handler: data => {
            if(data.newPassword == data.confPassword){
              this.profileProvider.updatePassword(
                data.newPassword,
                data.oldPassword,
              );
            }else{
              console.log('Contraseñas diferentes')
            }
            
          }
        }
      ]
    });
    alert.present();
  }

  takePicture(): void {
    this.cameraPlugin
      .getPicture({
        quality: 95,
        destinationType: this.cameraPlugin.DestinationType.DATA_URL,
        sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: this.cameraPlugin.EncodingType.PNG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: true
      })
      .then(
        imageData => {
          this.guestPicture = imageData;
        },
        error => {
          console.log('ERROR -> ' + JSON.stringify(error));
        }
      );
  }

  addGuest(
    guestName: string,
    eventId: string,
    eventPrice: number,
    guestPicture: string = null
  ): PromiseLike<any> {
    return this.eventListRef
      .child(`${eventId}/guestList`)
      .push({ guestName })
      .then(newGuest => {
        this.eventListRef.child(eventId).transaction(event => {
          event.revenue += eventPrice;
          return event;
        });

        if (guestPicture != null) {
          firebase
            .storage()
            .ref(`/guestProfile/${newGuest.key}/profilePicture.png`)
            .putString(guestPicture, 'base64', {
              contentType: 'image/png'
            })
            .then(savedPicture => {
              this.eventListRef
                .child(`${eventId}/guestList/${newGuest.key}/profilePicture`)
                .set(savedPicture.downloadURL);
            });
        }
      });
  }
    

  // getPicture(){
  //   let options: CameraOptions = {
  //     destinationType: this.cameraPlugin.DestinationType.DATA_URL,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     quality: 100
  //   }
  //   this.cameraPlugin.getPicture( options ).then(ImageData => {
  //     this.image = `data:image/jpeg;base64,${ImageData}`;
  //   })
  //   .then(profilePicture =>{
  //     const selfieRef = firebase.storage().ref(`profilePictures/user1/profilePicture.png`);
  //     selfieRef.putString(profilePicture, 'base64', {contentType: 'image/png'})
  //     .then(savedProfilePicture => {
  //       firebase
  //         .database()
  //         .ref(`users/user1/profilePicture`)
  //         .set(savedProfilePicture.downloadURL);
  //     });
  //   })
  //   .catch(error =>{
  //     console.error(error);
  //   })
  // }

  

}
