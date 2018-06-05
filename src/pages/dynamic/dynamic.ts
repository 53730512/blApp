import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
//import { RestProvider}  from "../../providers/rest/rest";
/**
 * Generated class for the DynamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
})
export class DynamicPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams){
             // public rest : RestProvider) {
             //   console.log(this.rest.getUrlReturn("http://www.baidu.com"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicPage');
  }

}
