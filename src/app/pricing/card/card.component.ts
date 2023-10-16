import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() planDetails = {
    title: "",
    price: "",
    features: [
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      },
      {
        name: "",
        textStyle: "",
        icon: "",
      }
    ]
  };
}
