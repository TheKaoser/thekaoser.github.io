import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
	<app-about-projects></app-about-projects>
  <app-the-three-kingdoms></app-the-three-kingdoms>
  `,
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
