import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1110Assignment';
  pricingDisplay = "";
  carouselDisplay = "d-none";

  switchDisplay(){
    let temp = this.pricingDisplay;
    this.pricingDisplay = this.carouselDisplay;
    this.carouselDisplay = temp;
  }
}
