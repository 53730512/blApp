import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../common/baseUI';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {

  nickname: any;
  password: any;
  repassword: any;
  account: any;
  error_message: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, public toastCtrl:ToastController, public rest:RestProvider,) {
    super(loadingCtrl, toastCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  dismiss()
  {
    this.navCtrl.pop();
  }
  
  regisetr()
  {
    if(!this.account)
    {
      this.showToast("账号不能为空");
      return;
    }

    if(!this.nickname)
    {
      this.showToast("昵称不能为空");
      return;
    }

    if(this.password != this.repassword)
    {
      this.showToast("两次输入的密码不一致");
      return;
    }

    let loader = this.showLoading('请稍后');

    this.rest.register(this.account, this.nickname, this.password).subscribe(
      f=>{
       // alert(f["status"]);
      if(f["Status"] == "OK"){
      //  this.storage.set('UserId', f['UserId']);
        this.showToast("注册成功");
        loader.dismiss();
        this.dismiss();
      }else{
        loader.dismiss();
          this.showToast(f["StatusContent"]);
      }

    }, error=>this.error_message = <any>error
    );

  }
}
