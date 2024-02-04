import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  lottieOptions: any = {
    path: 'assets/lottie/codingPerson.json', // Path to your Lottie animation JSON file
    renderer: 'svg', // Use 'svg' or 'canvas' depending on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to play automatically
  };

  ngOnInit(): void {
  }
  skills: string[] = ['Java','Python','JavaScript','TypeScript','C','Spring-Boot', 'ReactJS','Angular','Android','MySQL','PostgresSQL','AWS','Firebase'];

}
