import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LeboncoinService {

  constructor(private _obj:HttpClient) { }

  getCustomerData(){
    return this._obj.get('https://jsonplaceholder.typicode.com/users')
  }
}
