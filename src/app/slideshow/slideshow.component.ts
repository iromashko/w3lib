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
  slideIndex = 0;
  nextSlide() {
    console.log(this.slideIndex);
    return this.slideIndex < this.slides.length - 1
      ? this.slideIndex++
      : (this.slideIndex = 0);
  }
  prevSlide() {
    console.log(this.slideIndex);
    return this.slideIndex === 0
      ? (this.slideIndex = this.slides.length - 1)
      : this.slideIndex--;
  }
  changeSlide(index: number) {
    this.slideIndex = index;
    console.log(this.slideIndex);
  }
  constructor() {}

  ngOnInit(): void {}
}
