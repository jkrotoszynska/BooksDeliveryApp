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
  total: any;

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

  getTotal(){
  //  let result = this.cart.reduce((i,b) => i + parseInt(b.price), 0);
  //  console.log(result);
  //let total = 0;
  for(let [index,b] of this.cart.entries()){
    //console.log(parseInt(b.price));
    this.total += parseInt(b.price);
  }
  return this.total;
}

}
