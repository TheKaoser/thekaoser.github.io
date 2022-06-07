import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-the-three-kingdoms',
	template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/TTK.png">
		<p class="project-title is-size-1 is-bold">Three Kingdoms</p>
		<div class="project-description is-size-5 is-italic">
			Three kingdoms that fell into misfortune are now habited by an horde of goblins that fight and reproduce at the same rate. 
			Will you become the goblin god?
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/the-three-kingdoms" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=wBYZ2-WWjaYgit" target="_blank"><img src="assets/icons/Youtube.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						TCP Server with logic
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Multi-threaded clients
					</p>
				</div>
			</div>
			<div class="card project-highlight">
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
	]
})
export class TheThreeKingdomsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
