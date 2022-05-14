import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
    <video id="video" height="100%" width="100%" autoplay muted loop preload #videoRef>
		<source type="video/mp4" src="assets/videos/Oculus.mp4">
		<source type="video/ogg" src="assets/videos/Oculus.ogg">
	</video>
  `,
	styles: [
	]
})
export class AboutProjectsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
