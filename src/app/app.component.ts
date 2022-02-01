import { Component, OnInit } from '@angular/core';
import { FindYourCar } from './models/find-your-car.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  aCar!: FindYourCar;
  aCar2!: FindYourCar;
  cars!: FindYourCar[];

  ngOnInit() {
    this.cars = [
      {
        name: "renaud",
        price: 6000,
        adDate: 2016,
        cmpt: 0

      },
      {
        name: "Pegeaot",
        price: 6000,
        adDate: 2016,
        cmpt: 0
      }
    ];
  }
}
