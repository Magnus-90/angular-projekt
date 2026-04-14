import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  message = signal<string | null>(null);
  show(text: string){
    this.message.set(text)
    setTimeout(function(this: NotificationService){
      this.message.set(null);
    }.bind(this), 3000);
  }
}
