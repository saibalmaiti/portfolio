import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }
  navActive: string = ""
  night: boolean = false
  nightButtonText: string = "🌙  Night Mode"
  navBar: any;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.navBar = this.document.getElementById('navbar');
  }

  activateLightMode() {
    this.night = false
    this.nightButtonText = "🌙  Night Mode"
    this.document.body.classList.remove("night-mode");
    this.document.body.classList.add("light-mode");
    this.navBar?.classList.remove("night-mode");
    this.navBar?.classList.add("light-mode"); 
  }

  activateNightMode() {
    this.night = true
    this.nightButtonText = "☀️  Light Mode"
    this.document.body.classList.remove("light-mode");
    this.document.body.classList.add("night-mode");
    this.navBar?.classList.remove("light-mode");
    this.navBar?.classList.add("night-mode"); 
  }

  goToHome() {
    this.router.navigate(['/']).then(r => {
      this.navActive = ''
    });
  }

  goToAbout() {
    this.router.navigate(['/about']).then(r => {
      this.navActive = 'about'
    });
  }

  goToProjects() {
    this.router.navigate(['/projects']).then(r => {
      this.navActive = 'projects'
    });
  }

  goToCertifications() {
    this.router.navigate(['/certifications']).then(r => {
      this.navActive = 'certifications'
    });
  }

}
