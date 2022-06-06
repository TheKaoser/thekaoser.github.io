import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<div class="cover-div">
		<video id="splashArt" height="100%" width="100%" autoplay muted loop preload #videoRef>
			<source type="video/mp4" src="assets/videos/Projects.mp4">
		</video>
		<p class="title is-size-1 is-bold">Projects</p>
	</div>
	<div id="projects"></div>
  `,
	styles: [
		'#splashArt { position:absolute; }',
		'#videoShape { position:absolute; max-height: 30%; object-fit: cover; }',
		'#projects { position: relative; margin-top: 150px; }',
	]
})
export class AboutProjectsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
