import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<div class="splashart"> 
		<video poster="assets/imgs/SplashArt.png" autoplay muted loop preload #videoRef>
			<source type="video/mp4" src="assets/videos/Projects.mp4">
		</video>
	</div>
	<p class="title">Projects</p>
  `,
	styles: [
	]
})
export class AboutProjectsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
