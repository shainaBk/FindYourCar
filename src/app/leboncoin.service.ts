import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LeboncoinService {

  constructor(private _obj:HttpClient) { }

  getCustomerData(){
    return this._obj.get('http://www.omdbapi.com/?apikey=7469e52c&t=car\n')
  }
}
