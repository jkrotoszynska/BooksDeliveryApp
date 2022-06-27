import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../infomodal/infomodal.component';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  books: any;
  myInput: string;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(
    public router: Router,
    private newService: BooksService,
    private modalCtrl: ModalController,
    private cartService: CartService,
    ) {
    this.loadNew();
  }

  loadNew(){
   if(this.myInput != null){
    this.newService.getNew('search/' + this.myInput).subscribe( news => {
      this.books = news["books"];
      //console.log(this.books);
    });
   }
  }

  async openModal(book){
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      initialBreakpoint: 0.3,
      breakpoints: [0, 0.3, 0.5],
      componentProps: {
        title : book.title,
        subtitle: book.subtitle,
        isbn13: book.isbn13,
        price: book.price
      }
    });

    return await modal.present();
  }

  ngOnInit(){
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addtocart(book){
    console.log('add');
    this.cartService.addProduct(book);
  }

}
