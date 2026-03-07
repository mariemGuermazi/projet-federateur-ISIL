import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: any[] = [];

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getItems().subscribe((data:any)=>{
      this.items = data;
    });
  }

  goToAddItem(){
    this.router.navigate(['/add-item']);
  }

  goToItems(){
    this.router.navigate(['/items']);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  viewItem(id:number){
    this.router.navigate(['/item', id]);
  }
}
