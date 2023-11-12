import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { StoreFacade } from '@positioner/data-access';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'positioner-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapViewerComponent {
  center = signal<google.maps.LatLngLiteral>({
    lat: 40.9764048,
    lng: -5.670027,
  });
  options: google.maps.MapOptions = {
    zoom: 14,
  };
  markers = toSignal(this.store.markers$);

  constructor(private store: StoreFacade) {}
}
