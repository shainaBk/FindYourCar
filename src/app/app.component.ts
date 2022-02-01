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

  ngOnInit() {
    this.aCar = new FindYourCar("Renaud", 6000, 2016, 2005);
    this.aCar2 = new FindYourCar("Peugeot", 6000, 2016, 2005);
  }
}
