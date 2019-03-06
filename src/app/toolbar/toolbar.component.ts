import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public openCV() {
    window.open('assets/docs/TiagoSilvaCV.pdf', '_blank');
  }

  public openLinkedIn() {
    window.open('https://www.linkedin.com/in/tiago-silva-314798100/', '_blank');
  }

  public openGithub() {
    window.open('https://github.com/SilvT1/', '_blank');
  }
}
