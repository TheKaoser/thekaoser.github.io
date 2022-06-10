import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-fantastic-wars',
	template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/FW.png">
		<p class="project-title is-size-1 is-bold">Fantastic Wars</p>
		<div class="project-description is-size-5 is-italic">
			Put yourself into the shoes of an aspirant to unleash memorable battles for the conquest of the kingdom.
			Choose among three characters full of personality to fight against other players and face an immensity of situations in which each decision has an echo.
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/fantastic-wars" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=cqJkbaSanuE" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.troncocaotico.fantasticwars" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						FB Real Time Database
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						AI Navigation
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Distribution Algorithm
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Pixel Art Animations
					</p>
				</div>
			</div>
		</div>
    </div>
  `,
	styles: [
	]
})
export class FantasticWarsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
