import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-reviews',
	template: `
		<img id="splashArt" src="assets/imgs/Reviews.png">
		<p class="title">Reviews</p>
		<div id="empty"></div>
  `,
	styles: [
		'#empty { position: relative; margin-top: 150px; }',
	]
})
export class AboutReviewsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
