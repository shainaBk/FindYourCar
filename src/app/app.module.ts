import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FindYourCar2Component } from './find-your-car2/find-your-car2.component';

@NgModule({
  declarations: [
    AppComponent,
    FindYourCarComponent,
    NavComponent,
    FooterComponent,
    FindYourCar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
