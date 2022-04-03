import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  data = ["Adidas", "Nike", "Puma"];
  getData() {
    return this.data;
  }

  addData(item: any) {
    this.data.push(item)
    return this.data;
  }

  updateData(item: any, index: any) {
    this.data[index] = item;
  }

  deleteData(index: any) {
    this.data.splice(index, 1);
  }
}
