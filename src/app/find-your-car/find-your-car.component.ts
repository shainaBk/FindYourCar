import { Component, OnInit, Input } from '@angular/core';
import { FindYourCar } from '../models/find-your-car.model'

@Component({
  selector: 'app-find-your-car',
  templateUrl: './find-your-car.component.html',
  styleUrls: ['./find-your-car.component.scss']
})
export class FindYourCarComponent implements OnInit {//le ! c'est pour dire init not yet
  @Input() findyourcar!: FindYourCar;

  ngOnInit() {

  }

  onClickCmpt() {
    this.findyourcar.cmpt++;
  }
}