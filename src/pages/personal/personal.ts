import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {Storage} from "@ionic/storage"
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

  public notLogin:boolean = true;
  public logined:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public modalCtrl:ModalController,
  public storage:Storage) {
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

  ionViewDidEnter(){
    this.loadUserPage();
  }

  loadUserPage()
  {
    this.storage.get("UserId").then ((val)=>{
        if(val != null)
        {
          this.notLogin = false;
          this.logined = true;
        }
        else
        {
          this.notLogin = true;
          this.logined = false;
        }
    });
  }
}
