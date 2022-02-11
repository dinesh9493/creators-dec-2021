import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _clickedItem: string = '';
  private _registrationFormList: RegisterModel[] = [];

  constructor() { }

  getClickedItem() {
    return this._clickedItem;
  }

  setClickedItem(data: string) {
    this._clickedItem = data;
  }

  getRegisteredList() {
    return this._registrationFormList;
  }

  setRegistrationValue(formData: RegisterModel) {
    let obj = new RegisterModel(formData);
    this._registrationFormList.push(obj);
  }
}
