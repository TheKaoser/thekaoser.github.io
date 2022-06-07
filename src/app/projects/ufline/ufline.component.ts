import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ufline',
  template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/UFLINE.png">
		<p class="project-title is-size-1 is-bold">UFLINE</p>
		<div class="project-description is-size-5 is-italic">
			Push your tactical skills to their limits in this addictive UFO-themed minigame that will make you feel thrilling tension when played alone, 
			and also cause countless friendship breakups when played against your equally noob fellows.
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/ufline" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://gamejolt.com/games/ufline/637773" target="_blank"><img src="assets/icons/GameJolt.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Local Multiplayer
					</p>
				</div>
			</div>
			<div class="card project-highlight">
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
	]
})
export class UflineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
