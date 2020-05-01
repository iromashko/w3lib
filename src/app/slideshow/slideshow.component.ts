import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  slides = [
    {
      image: '../../assets/img/img_woods.jpg',
      wideImage: '../../assets/img/img_woods_wide.jpg',
      title: 'The Woods',
    },
    {
      image: '../../assets/img/img_5terre.jpg',
      wideImage: '../../assets/img/img_5terre_wide.jpg',
      title: 'Cinque Terre',
    },
    {
      image: '../../assets/img/img_mountains.jpg',
      wideImage: '../../assets/img/img_mountains_wide.jpg',
      title: 'Mountains and fjords',
    },
    {
      image: '../../assets/img/img_lights.jpg',
      wideImage: '../../assets/img/img_lights_wide.jpg',
      title: 'Northern Lights',
    },
    {
      image: '../../assets/img/img_woods.jpg',
      wideImage: '../../assets/img/img_nature_wide.jpg',
      title: 'Nature and sunrise',
    },
    {
      image: '../../assets/img/img_snow.jpg',
      wideImage: '../../assets/img/img_snow_wide.jpg',
      title: 'Snowy Mountains',
    },
  ];
  currentSlide = 0;
  nextSlide() {
    return this.currentSlide < this.slides.length - 1
      ? this.currentSlide++
      : (this.currentSlide = 0);
  }
  prevSlide() {
    return this.currentSlide === 0
      ? (this.currentSlide = this.slides.length - 1)
      : this.currentSlide--;
  }
  changeSlide(index: number) {
    this.currentSlide = index;
  }
  constructor() {}

  ngOnInit(): void {}
}
