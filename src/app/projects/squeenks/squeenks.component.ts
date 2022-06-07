import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squeenks',
  template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/Squeenks.png">
		<p class="project-title is-size-1 is-bold">Squeenks!</p>
		<div class="project-description is-size-5 is-italic">
			On a lost planet, some strange creatures are caught in a non-ending cycle of life and death. 
			You have the power to contemplate what their destiny will be this time.
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/squeenks" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=5MPgeJTiENw" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.DreamingBig.Squeenks" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Three competing AIs
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
export class SqueenksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
