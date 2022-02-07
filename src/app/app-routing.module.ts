import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindYourCarComponent } from './find-your-car/find-your-car.component'

const routes: Routes = [
  { path: 'find-your-car-component', component: FindYourCarComponent }//mettre les path dans un décorateur
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
