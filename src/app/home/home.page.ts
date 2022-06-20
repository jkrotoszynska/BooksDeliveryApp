import { Component } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: any;
  myInput: string;

  constructor(private newService: BooksService) {
    this.loadNew();
  }

  loadNew(){
   if(this.myInput != null){
    this.newService.getNew('search/' + this.myInput).subscribe( news => {
      this.books = news["books"];
      console.log(this.books);
    });
   } else {
    // this.newService.getNew('search/mongoDB').subscribe( news => {
    //   this.books = news["books"];
    //   console.log(this.books);
    // })
  };
  }
}
