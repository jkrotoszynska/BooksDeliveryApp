import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {
  book: any;

  constructor(navParams: NavParams, public viewCtrl: ModalController) {
    this.book=navParams.get('book');
   }

  ngOnInit() {
    console.log('ok');
  }

}
