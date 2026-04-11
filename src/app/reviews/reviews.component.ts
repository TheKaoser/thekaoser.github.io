import { Component } from '@angular/core';

@Component({
	selector: 'app-reviews',
	template: `
		<app-about-reviews></app-about-reviews>
		<app-review-list></app-review-list>
	`,
})
export class ReviewsComponent { }
