import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  lottieOptions: any = {
    path: 'assets/lottie/landingPerson.json', // Path to your Lottie animation JSON file
    renderer: 'svg', // Use 'svg' or 'canvas' depending on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to play automatically
  };
  ngOnInit(): void {
  }

}
