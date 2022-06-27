import { Injectable } from '@angular/core';
//import { NavParams } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
//import { Book } from './book/book.component';

export class Book{
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Book[]; // tu trzeba chyba do api się odwłoać ??

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor(
    //public navParams: NavParams
  ) { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(book){
    this.cart.push(book);
    this.cartItemCount.next(this.cartItemCount.value +1);
    console.log(this.cartItemCount);
  }

  decreaseProduct(book){

  }

  removeProducts(book){

  }

}
