import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-reviews',
  template: `
    <div class="cover-div">
		<img id="splashArt" src="assets/imgs/Reviews.png">
		<p id="rodrigo" class="is-size-1 is-bold">Reviews</p>
    </div>
	<div id="empty"></div>
  `,
  styles: [
	'#rodrigo { margin: 0; position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%); color: white; }',
	'#empty { position: relative; margin-top: 150px; }',
  ]
})
export class AboutReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
