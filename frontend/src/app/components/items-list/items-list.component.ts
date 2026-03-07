import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items:any = [];

  constructor(private itemService: ItemService,
              private router:Router) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(data=>{
      this.items = data;
    });
  }

  viewItem(id:number){
    this.router.navigate(['/item', id]);
  }

}
