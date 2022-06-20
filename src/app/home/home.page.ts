import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';


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
    private newService: BooksService
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

  goTo(){
    
  }
}
