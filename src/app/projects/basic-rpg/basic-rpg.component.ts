import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-rpg',
  template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/BasicRPG.png">
		<p class="project-title is-size-1 is-bold">Basic RPG</p>
		<div class="project-description is-size-5 is-italic">
			Kill monsters and bosses, get special items, build unique equipment, trade with other players and fight for victory in the Arena.
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/basic-rpg" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=S8x_KV-txLo" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.dreamingbig.basicrpg" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						FB Authentication/Database
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Shared Market
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						PVP Arena
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						2D Spine Animations
					</p>
				</div>
			</div>
		</div>
    </div>
  `,
	styles: [
	]
})
export class BasicRpgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
