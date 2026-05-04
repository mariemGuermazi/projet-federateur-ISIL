import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  item = {
    title: '',
    description: '',
    category_id: '',
    lending_duration: '',
    deposit: '',
    condition_rules: '',
    owner_id: ''
  };

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  addItem() {
    const ownerId = this.getCurrentUserId();
    if (!ownerId) {
      alert("Session expired. Please login again.");
      this.router.navigate(['/login']);
      return;
    }

    this.item.owner_id = ownerId;

    this.itemService.addItem(this.item).subscribe({
      next: () => {
        alert("Item published successfully");
        this.router.navigate(['/items']);
      },
      error: (err) => {
        const message = err?.error?.message || "Failed to publish item";
        alert(message);
      }
    });
  }

  private getCurrentUserId(): string | null {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    try {
      const payload = token.split('.')[1];
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const decoded = JSON.parse(atob(base64));
      return decoded?.id ? String(decoded.id) : null;
    } catch (error) {
      return null;
    }
  }

}
