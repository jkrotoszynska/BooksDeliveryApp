import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  madePic: madePic = new madePic();

  constructor(
    public router: Router,
    private camera: Camera
    ) { }

  ngOnInit() {

  }

  logout(){
    this.router.navigateByUrl('');
  }

  changePic(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.madePic.image = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        console.log('Camera issue: ' + err);
      }
    );
  }
}

class madePic{
  image: string;
}
