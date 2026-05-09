import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  api = 'http://localhost:5000/notifications';

  constructor(private http: HttpClient) {}

  getNotifications(userId: any) {
    return this.http.get<any[]>(`${this.api}/${userId}`);
  }
}
