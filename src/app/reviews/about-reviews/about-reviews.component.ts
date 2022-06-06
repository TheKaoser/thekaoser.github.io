import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-reviews',
	template: `
		<div class="cover-div">
			<img id="splashArt" src="assets/imgs/Reviews.png">
			<p class="title is-size-1 is-bold">Reviews</p>
		</div>
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
