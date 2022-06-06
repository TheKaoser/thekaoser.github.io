import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-the-three-kingdoms',
	template: `
    <div class="project">
		<img id="project-image" src="assets/imgs/TTK.png">
		<p id="title" class="is-size-1 is-bold">Three Kingdoms</p>
		<div id="description" class="is-size-5 is-italic">
			Three kingdoms that fell into misfortune are now habited by an horde of goblins that fight and reproduce at the same rate. 
			Will you become the goblin god?
		</div>
		<div id="socials">
			<a href="https://github.com/TheKaoser/the-three-kingdoms" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=wBYZ2-WWjaYgit" target="_blank"><img src="assets/icons/Youtube.png"></a>
		</div>
		<div id="highlights">
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						TCP Server with logic
					</p>
				</div>
			</div>
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Multi-threaded clients
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
		'#title { margin: 0; position: absolute; top: 15%; left: 10%; right: 50%; color: white; }',
		'#description { margin: 0; position: absolute; top: 40%; left: 10%; right: 55%; color: white; }',
		'#project-image { top: 20%; left: 50%; width: 55%; position: absolute }',
		'#socials {margin: 0; bottom: 15%; left: 10%; position: absolute; }',
		'#highlights { top: 93%; margin-left: 5%; position: absolute; width: 100%; }',
		'.highlight { margin-right: 5px; width: 20%; height: 75px; float: left; margin-bottom: 200px; background-color: #6b2cff; color: white; }',
	]
})
export class TheThreeKingdomsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
