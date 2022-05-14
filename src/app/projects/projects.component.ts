import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
	<app-about-projects></app-about-projects>
  `,
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
