import {Loading,LoadingController, Toast,ToastController} from "ionic-angular";
export abstract class BaseUI{
    constructor(public loadingCtrl:LoadingController, public toastCtrl:ToastController){}

    protected showLoading(message:string):Loading{
        let loader = this.loadingCtrl.create({
            content:message,
            dismissOnPageChange:true
        });

        loader.present();
        return loader;
    }

    protected showToast(message:string):Toast{
        let toast = this.toastCtrl.create({
            message:message,
            duration:3000,
            position:"bottom"
        });

        toast.present();
        return toast;
    }
}