import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  // Providing HERE creates a new instance scoped to this component & its children.
  providers: [NotificationService],
  template: `
    <div class="notification-box">
      <button (click)="send()">Send Notification</button>
      <p>Sent from this component: {{ localCount }}</p>
    </div>
  `
})
export class NotificationComponent {
  localCount = 0;
  constructor(private notificationService: NotificationService) {}

  send(): void {
    this.notificationService.notify('Hello from NotificationComponent');
    this.localCount++;
  }
}
