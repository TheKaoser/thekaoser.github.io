import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-fixer',
  template: `
    <div class="project">
		<img id="project-image" src="assets/imgs/PF.png">
		<p id="title" class="is-size-1 is-bold">Planet Fixer</p>
		<div id="description" class="is-size-5 is-italic">
			The planet is being attacked! Gather resources, repair the damages and... Don't delay!
		</div>
		<div id="socials">
			<a href="https://github.com/AbsoluteTundra/GGJ2020Game" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=kUbibp_TwiY&feature=youtu.be" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.DreamingBig.PlanetFixer" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div id="highlights">
			<div class="card highlight">
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
		'#title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#description { margin: 0; position: absolute; top: 40%; left: 10%; right: 55%; color: white; }',
		'#project-image { margin-left: 50%; margin-top: 100px; width: 55%; }',
		'#socials {margin: 0; top: 70%; left: 10%; position: absolute; }',
		'#highlights { margin-left: 5%; }',
		'.highlight { margin-top: 50px; margin-right: 5px; width: 20%; height: 75px; float: left; margin-bottom: 200px; background-color: #6b2cff; color: white;}',
	]
})
export class PlanetFixerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
