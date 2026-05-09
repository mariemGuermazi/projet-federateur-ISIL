import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NotificationService } from './services/notification.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  notifications: any[] = [];
  showNotifications = false;
  private refreshTimer: any;
  private routerSubscription?: Subscription;

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadNotifications();
      });

    this.refreshTimer = setInterval(() => {
      this.loadNotifications();
    }, 30000);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.loadNotifications();
    }
  }

  getStatusClass(status: string): string {
    return status === 'accepted' ? 'status-accepted' : 'status-rejected';
  }

  isLoggedIn(): boolean {
    return this.getCurrentUserId() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.notifications = [];
    this.showNotifications = false;
    this.router.navigate(['/login']);
  }

  private loadNotifications(): void {
    const userId = this.getCurrentUserId();
    if (!userId) {
      this.notifications = [];
      return;
    }

    this.notificationService.getNotifications(userId).subscribe({
      next: (data) => {
        this.notifications = data || [];
      },
      error: () => {
        this.notifications = [];
      }
    });
  }

  private getCurrentUserId(): number | null {
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
