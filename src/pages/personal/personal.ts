import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})



export class PersonalPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  //   window.Wechat.isInstalled(function (installed) {
  //     alert("Wechat installed: " + (installed ? "Yes" : "No"));
  // });

  }

  showModal(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
