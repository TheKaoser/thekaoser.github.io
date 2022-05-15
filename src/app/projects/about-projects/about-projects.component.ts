import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<div class="cover-div">
		<video id="splashArt" height="100%" width="100%" autoplay muted loop preload #videoRef>
			<source type="video/mp4" src="assets/videos/Projects.mp4">
		</video>
		<img id="videoShape" src="./assets/imgs/VideoShape.png">
	</div>
	<div id="projects">
		<p>Hola</p>
	</div>
  `,
	styles: [
		'#splashArt { position:absolute; }',
		'#videoShape { position:absolute; }',
		'#projects { position: relative; margin-top: 100px; }',
	]
})
export class AboutProjectsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
