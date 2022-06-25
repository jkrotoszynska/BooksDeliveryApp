import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  constructor(  ) { }

  ngOnInit() {}

}

export class Book{
  constructor(
    public title: string,
    public subtitle: string,
    public isbn13: string,
    public price: string,
    public image: string,
    public url: string

  ) { }  
}
