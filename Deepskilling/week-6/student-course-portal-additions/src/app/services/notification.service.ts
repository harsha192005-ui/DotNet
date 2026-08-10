import { Injectable } from '@angular/core';

// No providedIn: 'root' -> provided at COMPONENT level instead (see notification.component.ts),
// so each component that provides it gets its own isolated instance.
@Injectable()
export class NotificationService {
  private count = 0;

  notify(message: string): void {
    this.count++;
    console.log(`[Notification #${this.count}]: ${message}`);
  }
}
