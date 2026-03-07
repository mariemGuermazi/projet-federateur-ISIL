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
    condition_rules: ''
  };

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  addItem() {
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

}
