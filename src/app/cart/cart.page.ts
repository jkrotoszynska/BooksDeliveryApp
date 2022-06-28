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
  total: number;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  removeCartItem(book){
    this.cartService.removeProducts(book);
  }
}
