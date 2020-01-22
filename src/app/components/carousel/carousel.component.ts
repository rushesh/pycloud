import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {

  constructor() { }
  myInterval = 1000;
  activeSlideIndex = 0;
 
  slides = [
    {image: '../../../assets/images/foodimg1.jpg'},
    {image: '../../../assets/images/foodimg3.jpg'},
    {image: '../../../assets/images/foodimg6.jpg'},
    {image: '../../../assets/images/slidehsow1.jpg'},
    {image: '../../../assets/images/slidehsow6.jpg'},
    {image: '../../../assets/images/slidehsow5.jpg'}
  ];
  }
