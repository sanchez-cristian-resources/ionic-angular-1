import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  onClose() {
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalController.dismiss({message: 'This is a dummy message'}, 'confirm');
  }

}
