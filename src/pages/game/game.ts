import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var Wechat: any;
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    var scope = "snsapi_userinfo",
      state = "_" + (+new Date());
    Wechat.auth(scope, state, function (response) {
      // you may use response.code to get the access token.
      alert(JSON.stringify(response));
    }, function (reason) {
      alert("Failed: " + reason);
    });

  }

}
