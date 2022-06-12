import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<video autoplay muted loop preload #videoRef>
		<source type="video/mp4" src="assets/videos/Projects.mp4">
	</video>
	<p class="title">Projects</p>
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
