import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() customDisplay = '';

  PhotosList = [
    {
      id: 1,
      imageUrl:
        'https://fastly.picsum.photos/id/645/1080/720.jpg?hmac=muD0PR0GTkJiI6SPodjMwfNGdGdDpbVbNAdLCsSjyEQ',
    },
    {
      id: 2,
      imageUrl:
        'https://fastly.picsum.photos/id/989/1080/720.jpg?hmac=wKCeGpKfedEideuE2Jp-DVRMeKEa2QU40kAnlSDCPyg',
    },
    {
      id: 3,
      imageUrl:
        'https://fastly.picsum.photos/id/919/1080/720.jpg?hmac=aqhAlQIZLLS1YdYdmQXODuDdBX4LH2JjeCh6bKpGQok',
    },
    {
      id: 4,
      imageUrl:
        'https://fastly.picsum.photos/id/143/1080/720.jpg?hmac=B-MzrIgNuE3t1OnQjzmZYZX50bf4wzKXFWbPVkGcu5k',
    },
  ];

  imgID = '1';
  totalImages = this.PhotosList.length;

  prevImage() {
    this.imgID = '' + (parseInt(this.imgID) - 1);
    if (parseInt(this.imgID) < 0) this.imgID = '' + this.totalImages;
    window.location.href = `#${this.imgID}`;
  }

  nextImage() {
    this.imgID = '' + (parseInt(this.imgID) + 1);
    if (parseInt(this.imgID) > this.totalImages) this.imgID = '1';
    window.location.href = `#${this.imgID}`;
  }
}
