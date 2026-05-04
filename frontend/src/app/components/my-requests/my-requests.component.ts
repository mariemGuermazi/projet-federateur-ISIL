import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BorrowService } from '../../services/borrow.service';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {

  requests: any[] = [];
  errorMessage = '';

  constructor(private borrowService: BorrowService) {}

  ngOnInit(): void {
    const userId = this.borrowService.getCurrentUserId();

    if (!userId) {
      this.errorMessage = 'User not authenticated.';
      return;
    }

    this.borrowService.getUserRequests(userId).subscribe({
      next: (data) => {
        this.requests = data;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Failed to load requests.';
      }
    });
  }
}
