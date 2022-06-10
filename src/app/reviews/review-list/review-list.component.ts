import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-review-list',
	template: `
		<app-about-reviews></app-about-reviews>
		<app-new-world-list></app-new-world-list>
		<app-lost-ark-list></app-lost-ark-list>
	`,
	styles: [
	]
})
export class ReviewListComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
