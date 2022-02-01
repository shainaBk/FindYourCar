import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindYourCar } from './find-your-car/find-your-car.component'
import { FindYourCar2 } from './find-your-car2/find-your-car2.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
