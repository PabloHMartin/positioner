import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
@Component({
  selector: 'positioner-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss'],
})
export class MapViewerComponent implements OnInit {
  center = signal<google.maps.LatLngLiteral>({
    lat: 40.9764048,
    lng: -5.670027,
  });
  options: google.maps.MapOptions = {
    zoom: 14,
  };
  markers = signal<any>([]);

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);

      this.markers.set([
        {
          position: {
            lat: 40.9764048,
            lng: -5.670027,
          },
          label: {
            color: 'red',
            text: 'Marker label ' + (this.markers().length + 1),
          },
          title: 'Marker title ' + (this.markers().length + 1),
          options: { animation: google.maps.Animation.BOUNCE },
        },
      ]);
    });
  }
}
