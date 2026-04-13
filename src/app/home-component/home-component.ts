import { Component, inject } from '@angular/core';
import { NotificationService } from '../notification-service';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  private ns = inject(NotificationService);

  testNotification() {
    this.ns.show('Willkommen im Webshop!');
  }
}
