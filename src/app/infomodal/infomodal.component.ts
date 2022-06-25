import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-infomodal',
  templateUrl: './infomodal.component.html',
  styleUrls: ['./infomodal.component.scss'],
})
export class InfoModalComponent implements OnInit {

  constructor(
    public navParams: NavParams,
    public viewCtrl: ModalController,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private newService: BooksService
    ) { }

  ngOnInit() {

  }
}
