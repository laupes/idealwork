import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.scss']
})
export class CaroselloComponent implements OnInit {

  slideIndex = 1;

  constructor() { }

  titolo: string;

  ngOnInit(): void {
    this.titolo = sessionStorage.getItem('titoloEsecutvo');
    this.showSlides(this.slideIndex);
  }

  // tslint:disable-next-line: typedef


  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    let i: number;
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }

}
