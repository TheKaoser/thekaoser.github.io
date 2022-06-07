import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-keeper',
  template: `
    <div class="project">
		<img class="project-image" src="assets/imgs/TimeKeeper.png">
		<p class="project-title is-size-1 is-bold">Time Keeper</p>
		<div class="project-description is-size-5 is-italic">
			You are the Timekeeper. You must keep the gears of time moving forward by running against them. 
			Avoid obstacles by changing your way but without changing your path and keep time moving eternally.
		</div>
		<div class="project-links">
			<a href="https://github.com/TheKaoser/time-keeper" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://threeraccoonsgames.itch.io/timekeeper" target="_blank"><img src="assets/icons/Itch.png"></a>
		</div>
		<div class="project-highlights">
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Procedural gears
					</p>
				</div>
			</div>
			<div class="card project-highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Black and White art
					</p>
				</div>
			</div>
		</div>
    </div>
  `,
	styles: [
	]
})
export class TimeKeeperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
