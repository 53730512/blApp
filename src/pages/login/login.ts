import { Component } from '@angular/core';
import {NavController, NavParams,ViewController, LoadingController, ToastController} from 'ionic-angular';
import { BaseUI } from '../common/baseUI';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI{

  account:string;
  password:string;
  error_message:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public loadingCtrl:LoadingController, public rest:RestProvider, public toastCtrl:ToastController) {
    super(loadingCtrl, toastCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  login()
  {
    if(!this.account||!this.password)
    {
      this.showToast("账号和密码不能为空!");
      return;
    }
    let loader = this.showLoading("正在登录");
    this.rest.login(this.account, this.password).subscribe(
      f=>{
       // alert(f["status"]);
      if(f["status"] == "OK"){
        
      }else{
        loader.dismiss();
          this.showToast(f["StatusContent"]);
      }

    }, error=>this.error_message = <any>error
    );
  }
}
