import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<video class="splashart" autoplay muted loop preload #videoRef>
		<source type="video/mp4" src="assets/videos/Projects.mp4">
	</video>
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
