import { Component, OnInit, Input } from '@angular/core';
import { FindYourCar } from '../models/find-your-car.model'
import {LeboncoinService} from '../leboncoin.service'

@Component({
  selector: 'app-find-your-car',
  templateUrl: './find-your-car.component.html',
  styleUrls: ['./find-your-car.component.scss']
})
export class FindYourCarComponent implements OnInit {//le ! c'est pour dire init not yet
  @Input() findyourcar!: FindYourCar;
  data:any;

  constructor(private user:LeboncoinService) {
    this.user.getCustomerData().subscribe(data=>{
      console.log(data);
      this.data=Array(data)
    })
  }

  ngOnInit() {
  }

  onClickCmpt() {
    this.findyourcar.cmpt++;
  }
}
