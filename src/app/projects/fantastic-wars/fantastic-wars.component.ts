import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-fantastic-wars',
	template: `
    <div class="project">
		<img id="project-image" src="assets/imgs/FW.jpg">
		<p id="title" class="is-size-1 is-bold">Fantastic Wars</p>
		<div id="description" class="is-size-5 is-italic">
			Put yourself into the shoes of an aspirant to unleash memorable battles for the conquest of the kingdom.
			Choose among three characters full of personality to fight against other players and face an immensity of situations in which each decision has an echo.
		</div>
		<div id="socials">
			<a href="https://github.com/TheKaoser/fantastic-wars" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://www.youtube.com/watch?v=cqJkbaSanuE" target="_blank"><img src="assets/icons/Youtube.png"></a>
			<a class="ml-6" href="https://play.google.com/store/apps/details?id=com.troncocaotico.fantasticwars" target="_blank"><img src="assets/icons/GooglePlay.png"></a>
		</div>
		<div id="highlights">
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						FB Real Time Database
					</p>
				</div>
			</div>
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						AI Navigation
					</p>
				</div>
			</div>
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Distribution Algorithm
					</p>
				</div>
			</div>
			<div class="card highlight">
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
		'#title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#description { margin: 0; position: absolute; top: 30%; left: 10%; right: 55%; color: white; }',
		'#project-image { margin-left: 50%; margin-top: 100px; width: 55%; }',
		'#socials {margin: 0; top: 70%; left: 10%; position: absolute; }',
		'#highlights { margin-left: 5%; }',
		'.highlight { margin-top: 50px; margin-right: 5px; width: 20%; height: 75px; float: left; margin-bottom: 200px; background-color: #6b2cff; color: white;}',
	]
})
export class FantasticWarsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
