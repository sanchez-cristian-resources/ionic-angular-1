import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage, 
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '', 
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          }, 
          {
            path: ':placeId',
            loadChildren: () => import('./discover/place-details/place-details.module').then( m => m.PlaceDetailsPageModule)
          }
        ]
      },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
      }
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
