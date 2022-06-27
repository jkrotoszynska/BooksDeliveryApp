import { Component, OnInit } from '@angular/core';
import { Book, CartService } from '../cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Book[] = [];

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(book){
    this.cartService.decreaseProduct(book);
  }

  increaseCartItem(book){
    this.cartService.addProduct(book);
  }

  removeCartItem(book){
    this.cartService.removeProducts(book);
  }

  getTotal(){
   
  }

}
