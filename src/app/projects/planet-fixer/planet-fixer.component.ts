import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-fixer',
  template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/PF.png">
		<p class="project-title is-size-1 is-bold">Planet Fixer</p>
		<div class="project-description is-size-5 is-italic">
			The planet is being attacked! Gather resources, repair the damages and... Don't delay!
		</div>
		<div class="project-links">
			<a href="https://github.com/AbsoluteTundra/GGJ2020Game" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=kUbibp_TwiY&feature=youtu.be" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.DreamingBig.PlanetFixer" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Procedural Planets
					</p>
				</div>
			</div>
		</div>
    </div>
  `,
	styles: [
	]
})
export class PlanetFixerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
