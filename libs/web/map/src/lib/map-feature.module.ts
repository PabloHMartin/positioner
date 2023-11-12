import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MapViewerComponent } from './map-viewer.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMapsModule } from '@angular/google-maps';

export const routes: Route[] = [{ path: '', component: MapViewerComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
  ],
  declarations: [MapViewerComponent],
  exports: [MapViewerComponent],
})
export class MapfeatureModule {}
