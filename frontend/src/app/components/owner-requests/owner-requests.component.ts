import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BorrowService } from '../../services/borrow.service';

@Component({
  selector: 'app-owner-requests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './owner-requests.component.html',
  styleUrls: ['./owner-requests.component.css']
})
export class OwnerRequestsComponent implements OnInit {

  requests: any[] = [];
  errorMessage = '';

  constructor(private borrowService: BorrowService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    const ownerId = this.borrowService.getCurrentUserId();

    if (!ownerId) {
      this.errorMessage = 'User not authenticated.';
      return;
    }

    this.borrowService.getOwnerRequests(ownerId).subscribe({
      next: (data) => {
        this.requests = data;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Failed to load owner requests.';
      }
    });
  }

  updateStatus(id: number, status: 'accepted' | 'rejected') {
    this.borrowService.updateBorrowRequestStatus(id, status).subscribe({
      next: () => {
        this.requests = this.requests.map((request) => {
          if (request.id === id) {
            return { ...request, status };
          }
          return request;
        });
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to update request');
      }
    });
  }
}
