import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ufline',
  template: `
    <div class="project">
		<img id="project-image" src="assets/imgs/UFLINE.png">
		<p id="title" class="is-size-1 is-bold">UFLINE</p>
		<div id="description" class="is-size-5 is-italic">
			Push your tactical skills to their limits in this addictive UFO-themed minigame that will make you feel thrilling tension when played alone, 
			and also cause countless friendship breakups when played against your equally noob fellows.
		</div>
		<div id="socials">
			<a href="https://github.com/TheKaoser/ufline" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://gamejolt.com/games/ufline/637773" target="_blank"><img src="assets/icons/GameJolt.png"></a>
		</div>
		<div id="highlights">
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Local Multiplayer
					</p>
				</div>
			</div>
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Highscore vs IA
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
export class UflineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
