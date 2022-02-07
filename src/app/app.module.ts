import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchACarComponent } from './search-a-car/search-a-car.component';


@NgModule({
  declarations: [
    AppComponent,
    FindYourCarComponent,
    NavComponent,
    FooterComponent,
    SearchACarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
