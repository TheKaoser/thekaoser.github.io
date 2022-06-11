import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reviews',
	template: `
		<app-about-reviews></app-about-reviews>
		<app-review-list></app-review-list>
	`,
	styles: [
	]
})
export class ReviewsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
