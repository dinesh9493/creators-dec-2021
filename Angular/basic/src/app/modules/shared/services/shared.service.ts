import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _clickedItem: string = '';

  constructor() { }

  getClickedItem() {
    return this._clickedItem;
  }

  setClickedItem(data: string) {
    this._clickedItem = data;
  }
}
