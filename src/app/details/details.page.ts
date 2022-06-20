import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    const isbn13 = this.route.snapshot.paramMap.get('isbn13');
    this.booksService.getNew('book/' +isbn13).subscribe(res => {
      console.log(res);
    });
  }

}
