import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, IonSlides, IonSlide, IonGrid, AlertController, LoadingController } from '@ionic/angular';
import { FireserviceService } from '../fireservice.service';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email: any;
  public password: any;
  public name: any;
  constructor(
    public router: Router,
    public fireService: FireserviceService,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    //private vibration: Vibration
  ) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Register failed',
      message: ' Invalid mail or password.',
      buttons: ['OK']
    });
    await alert.present();

    const {role} = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }

  signup(){
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          uid:res.user.uid
        };
        this.fireService.saveDetails(data).then(ress=>{
         //alert('Account Created!');
         this.presentLoading();
         this.router.navigateByUrl('/tabs/tabs/home');
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      //alert(err.message);
      this.showAlert();
      //this.vibration.vibrate(1000);
      console.log(err);
    });
  }
  login(){
    this.router.navigateByUrl('');
  }

}
