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
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.post(this.api, item, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }

    return this.http.post(this.api, item);
  }

}
