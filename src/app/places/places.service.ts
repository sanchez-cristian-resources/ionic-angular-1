import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Manhattan Mansion', 
      'In the heart of New York City.', 
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg', 
      149.99
    ),
    new Place(
      'p2', 
      'L\ Amour Toujours', 
      'Romantic place in Paris.', 
      'https://media-cdn.tripadvisor.com/media/photo-s/16/0b/96/09/hotel-amour.jpg', 
      189.99
    ),
    new Place(
      'p3', 
      'the Foggy Palace', 
      'Not your average city trip!', 
      'https://tangiyoga.files.wordpress.com/2015/04/castle-in-fog.jpg', 
      149.99
    ),
  ]

  get places() {
    return [...this._places];
  }

  constructor() { }
}
