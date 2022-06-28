import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FireserviceService } from '../fireservice.service';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public router: Router,
    public fireService: FireserviceService,
    public alertController: AlertController,
    private nativePageTransitions: NativePageTransitions,
    public navCtrl: NavController
    //private vibration: Vibration
  ) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Login failed',
      message: ' Invalid mail or password.',
      buttons: ['OK']
    });
    await alert.present();

    const {role} = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  login(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(ress=>{
          //console.log(ress);
          //alert('Welcome '+ ress['name']);
          this.router.navigateByUrl('/tab/home');
        },err=>{
          //console.log(err);
        });
      }
    },err=>{
      //alert(err.message);
      this.showAlert();
      //this.vibration.vibrate(1000);
      //console.log(err);
    });
  }
  signup(){
    this.router.navigateByUrl('signup');
  }
}
