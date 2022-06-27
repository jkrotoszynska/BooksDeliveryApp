import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  data: Book[];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor(
    
  ) { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }


  addProduct(book){
    this.cart.push(book);
  }

  removeProducts(book){
    for(let [index, b] of this.cart.entries()){
      this.cart.splice(index,1);
      console.log(b)
    }
  }

}
