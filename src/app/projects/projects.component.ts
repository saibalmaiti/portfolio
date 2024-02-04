import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goTogitHub(link:string) {
    window.location.href = link
  }

  downloadApk() {
    window.location.href = "https://drive.google.com/file/d/1GoJ3-T2oyhA1bPcSopIs8pEYshA2f94f/view?usp=sharing"
  }

}
