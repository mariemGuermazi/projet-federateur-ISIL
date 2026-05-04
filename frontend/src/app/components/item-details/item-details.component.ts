import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { BorrowService } from '../../services/borrow.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item:any;
  startDate = '';
  endDate = '';
  successMessage = '';
  errorMessage = '';
  currentUserId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private borrowService: BorrowService
  ) {}

  ngOnInit(){
    this.currentUserId = this.borrowService.getCurrentUserId();

    const id = this.route.snapshot.params['id'];

    this.itemService.getItem(id).subscribe(data=>{
      this.item = data;
    });

  }

  requestBorrow() {
    this.successMessage = '';
    this.errorMessage = '';

    if (!this.currentUserId) {
      this.errorMessage = 'You must be logged in to request this item.';
      return;
    }

    if (!this.item?.id) {
      this.errorMessage = 'This item cannot be requested right now.';
      return;
    }

    if (!this.startDate || !this.endDate) {
      this.errorMessage = 'Please select start and end dates.';
      return;
    }

    const ownerId = this.resolveOwnerId();
    if (ownerId && this.currentUserId === ownerId) {
      this.errorMessage = 'You cannot request your own item.';
      return;
    }

    const payload = {
      item_id: this.item.id,
      borrower_id: this.currentUserId,
      owner_id: ownerId || null,
      start_date: this.startDate,
      end_date: this.endDate
    };

    this.borrowService.createBorrowRequest(payload).subscribe({
      next: () => {
        this.successMessage = 'Borrow request sent successfully.';
        this.startDate = '';
        this.endDate = '';
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Failed to create borrow request.';
      }
    });
  }

  private resolveOwnerId(): number | null {
    const ownerCandidate =
      this.item?.owner_id ??
      this.item?.ownerId ??
      this.item?.user_id ??
      this.item?.userId ??
      null;

    if (ownerCandidate === null || ownerCandidate === undefined || ownerCandidate === '') {
      return null;
    }

    const parsed = Number(ownerCandidate);
    return Number.isNaN(parsed) ? null : parsed;
  }

}
