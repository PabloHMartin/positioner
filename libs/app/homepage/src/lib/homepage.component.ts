import { Component } from '@angular/core';

@Component({
  selector: 'positioner-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  startSendingPosition() {
    console.log('start');
  }

  stopSendingPosition() {
    console.log('stop');
  }
}
