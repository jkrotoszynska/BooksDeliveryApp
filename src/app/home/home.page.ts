import { Component } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: any

  constructor(private newService:BooksService) {
    this.loadNew();
  }

  loadNew(){
    this.newService.getNew("search/mongodb").subscribe( news => {
      this.books = news['books'];
      console.log(this.books);
    })
  }
}
