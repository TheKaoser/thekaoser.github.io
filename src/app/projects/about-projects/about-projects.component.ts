import { Component } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<div class="splashart"> 
		<video class="main-img" poster="assets/imgs/SplashArt.png" autoplay muted loop preload>
			<source type="video/mp4" src="assets/videos/Projects.mp4">
		</video>
	</div>
	<p class="title">Projects</p>
  `,
})
export class AboutProjectsComponent { }
