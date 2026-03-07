import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  api = "http://localhost:5000/items";

  constructor(private http: HttpClient) {}

  getItems(){
    return this.http.get<any[]>(this.api);
  }

  getItem(id: any){
    return this.http.get(this.api + "/" + id);
  }

  addItem(item: any){
    return this.http.post(this.api, item);
  }

}
