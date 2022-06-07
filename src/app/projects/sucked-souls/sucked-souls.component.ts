import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucked-souls',
  template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/SuckedSouls.png">
		<p class="project-title is-size-1 is-bold">Sucked Souls</p>
		<div class="project-description is-size-5 is-italic">
			The undead can endlessly try to recover humanity by stealing souls... But being a human atracts evil.
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/sucked-souls" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://thekaoser.itch.io/suck-souls" target="_blank"><img src="assets/icons/Itch.png"></a>
		</div>
		<div class="project-highlights">
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
export class SuckedSoulsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
