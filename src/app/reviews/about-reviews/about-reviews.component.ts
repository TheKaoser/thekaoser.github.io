import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-reviews',
	template: `
	<div class="splashart"> 
		<img class="main-img" src="assets/imgs/Reviews.png">
	</div>
	<p class="title">Reviews</p>
  `,
	styles: [
	]
})
export class AboutReviewsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
