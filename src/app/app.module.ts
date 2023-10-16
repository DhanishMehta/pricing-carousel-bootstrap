import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PricingComponent } from './pricing/pricing.component';
import { CardComponent } from './pricing/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PricingComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
