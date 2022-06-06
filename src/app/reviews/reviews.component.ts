import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reviews',
	template: `
    <app-about-reviews></app-about-reviews>
	<app-new-world></app-new-world>
  `,
	styles: [
	]
})
export class ReviewsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
