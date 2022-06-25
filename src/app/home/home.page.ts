import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../infomodal/infomodal.component';
import { Book } from '../book/book.component'

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
    private modalCtrl: ModalController,
    ) {
    this.loadNew();
  }

  loadNew(){
   if(this.myInput != null){
    this.newService.getNew('search/' + this.myInput).subscribe( news => {
      this.books = news["books"];
      console.log(this.books);
    });
   }
  }

  async openModal(books){
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: {
        "title" : books.title,
        "subtitle": books.subtitle,
        "isbn13": books.isbn13, 
        "price": books.price
      }
    });

    return await modal.present();
  }

}
