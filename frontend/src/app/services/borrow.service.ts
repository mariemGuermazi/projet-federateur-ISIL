import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  api = 'http://localhost:5000/borrow-requests';

  constructor(private http: HttpClient) {}

  createBorrowRequest(payload: any) {
    return this.http.post(this.api, payload);
  }

  getUserRequests(userId: number) {
    return this.http.get<any[]>(`${this.api}/user/${userId}`);
  }

  getOwnerRequests(ownerId: number) {
    return this.http.get<any[]>(`${this.api}/owner/${ownerId}`);
  }

  updateBorrowRequestStatus(id: number, status: 'accepted' | 'rejected') {
    return this.http.put(`${this.api}/${id}`, { status });
  }

  getCurrentUserId(): number | null {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    try {
      const payload = token.split('.')[1];
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = JSON.parse(atob(base64));
      return decodedPayload?.id ?? null;
    } catch (error) {
      return null;
    }
  }
}
