import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
		<app-about-me></app-about-me>
		<app-skills></app-skills>
		<app-about-website></app-about-website>
	`,
})
export class HomeComponent { }
