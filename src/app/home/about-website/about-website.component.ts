import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-website',
	template: `
	<div style="clear: both"></div>
	<div id="about-list">
		<div class="about-element">
			<a routerLink="projects"> 
				<div>
					<p class="text-left is-size-1 is-bold" style="top: 17%">EXPLORE MY PROJECTS</p>
					<div class="text-left is-size-6 is-italic" style="top: 65%">
						Whatever your taste in video games is, you will find something for you.
					</div>
					<img class="image-left" src="assets/imgs/SuckedSouls.png">
				</div>
			</a>
		</div>
		<div class="about-element">
			<a routerLink="reviews"> 
				<div>
					<p class="text-right is-size-1 is-bold" style="top: 17%">READ MY REVIEWS</p>
					<div class="text-right is-size-6 is-italic" style="top: 65%">
						Read my thoughts on some of the most iconic games of all times.
					</div>
					<img class="image-right" src="assets/imgs/ReviewsCut.png">
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#about-list { display: flex; flex-direction: column; align-items: center; width: 100% }',
		'.about-element { position: relative; width: 70%; background-color: #6f56ff; border-radius: 10px; margin-bottom: 5%; }',
		'.text-left { position: absolute; margin: 0; left: 6%; right: 70%; color: white; }',
		'.text-right { position: absolute; margin: 0; right: 6%; left: 70%; color: white; text-align: right; }',
		'.image-left { margin-left: 50%; width: 50%; border-radius: 10px; }',
		'.image-right { margin-right: 50%; width: 50%; border-radius: 10px; }',
	]
})
export class AboutWebsiteComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
