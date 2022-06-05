import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squeenks',
  template: `
    <div class="project">
		<img id="project-image" src="assets/imgs/Squeenks.png">
		<p id="title" class="is-size-1 is-bold">Squeenks!</p>
		<div id="description" class="is-size-5 is-italic">
			On a lost planet, some strange creatures are caught in a non-ending cycle of life and death. 
			You have the power to contemplate what their destiny will be this time.
		</div>
		<div id="socials">
			<a href="https://github.com/TheKaoser/squeenks" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=5MPgeJTiENw" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.DreamingBig.Squeenks" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div id="highlights">
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Three competing AIs
					</p>
				</div>
			</div>
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						3D models/animations
					</p>
				</div>
			</div>
		</div>
    </div>
  `,
	styles: [
		'#title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#description { margin: 0; position: absolute; top: 35%; left: 10%; right: 55%; color: white; }',
		'#project-image { margin-left: 50%; margin-top: 100px; width: 55%; }',
		'#socials {margin: 0; top: 70%; left: 10%; position: absolute; }',
		'#highlights { margin-left: 5%; }',
		'.highlight { margin-top: 50px; margin-right: 5px; width: 20%; height: 75px; float: left; margin-bottom: 200px; background-color: #6b2cff; color: white;}',
	]
})
export class SqueenksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
