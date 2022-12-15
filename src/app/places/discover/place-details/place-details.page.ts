import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    private navController: NavController  
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
    this.navController.navigateBack('/places/tabs/discover');
  }

}
