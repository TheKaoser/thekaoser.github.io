import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
		<app-about-me></app-about-me>
		<app-skills></app-skills>
	`,
	styles: [
	]
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
