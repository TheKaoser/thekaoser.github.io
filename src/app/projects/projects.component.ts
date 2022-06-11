import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <app-about-projects></app-about-projects>
    <app-project-list></app-project-list>
  `,
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
