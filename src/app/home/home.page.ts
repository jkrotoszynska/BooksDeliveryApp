import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: any;
  myInput: string;

  constructor(
    public router: Router,
    private newService: BooksService,
    private modalCtrl: ModalController
    ) {
    this.loadNew();
  }

  loadNew(){
   if(this.myInput != null){
    this.newService.getNew('search/' + this.myInput).subscribe( news => {
      this.books = news["books"];
      console.log(this.books);
    });
   } else {

  };
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      cssClass: 'my-custom-class',
      componentProps: {
        title: [this.books.title]
      }
    });


    return await modal.present();
  }

}
