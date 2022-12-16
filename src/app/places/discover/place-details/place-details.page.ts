import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: Place;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private placesService: PlacesService, 
    private navController: NavController, 
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.places.find(place => place.id === paramMap.get('placeId'))
    })

  }

  onBook() {
    this.modalController.create({
        component: CreateBookingComponent,
        componentProps: {selectedPlace: this.place}
    }).then( modalElement => {
        modalElement.present()
        return modalElement.onDidDismiss()
    }).then(resultData => {
        console.log(resultData.data, resultData.role)
        if (resultData.role === 'confirm') {
            console.log('Booked!')
        }
    })
  }

}
