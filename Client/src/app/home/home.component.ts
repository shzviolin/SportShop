import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "assets/images/hero1.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "assets/images/hero2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "assets/images/hero3.jpg"}
  ];
}
