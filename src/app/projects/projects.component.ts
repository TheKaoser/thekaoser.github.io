import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
	<app-about-projects></app-about-projects>
  <app-sucked-souls></app-sucked-souls>
  <app-time-keeper></app-time-keeper>
  <app-ufline></app-ufline>
  <app-basic-rpg></app-basic-rpg>
  <app-planet-fixer></app-planet-fixer>
  <app-squeenks></app-squeenks>
  <app-fantastic-wars></app-fantastic-wars>
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
