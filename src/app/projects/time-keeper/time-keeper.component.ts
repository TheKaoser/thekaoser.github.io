import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-keeper',
  template: `
    <div class="project">
		<img id="project-image" src="assets/imgs/TimeKeeper.png">
		<p id="title" class="is-size-1 is-bold">Time Keeper</p>
		<div id="description" class="is-size-5 is-italic">
			You are the Timekeeper. You must keep the gears of time moving forward by running against them. 
			Avoid obstacles by changing your way but without changing your path and keep time moving eternally.
		</div>
		<div id="socials">
			<a href="https://github.com/TheKaoser/time-keeper" target="_blank"><img src="assets/icons/GitHub.png"></a>
			<a class="ml-6" href="https://threeraccoonsgames.itch.io/timekeeper" target="_blank"><img src="assets/icons/Itch.png"></a>
		</div>
		<div id="highlights">
			<div class="card highlight">
				<div class="card-content">
					<p class="is-italic is-size-6">
						Procedural gears
					</p>
				</div>
			</div>
			<div class="card highlight">
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
		'#title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#description { margin: 0; position: absolute; top: 35%; left: 10%; right: 55%; color: white; }',
		'#project-image { margin-left: 50%; margin-top: 100px; width: 55%; }',
		'#socials {margin: 0; top: 70%; left: 10%; position: absolute; }',
		'#highlights { margin-left: 5%; }',
		'.highlight { margin-top: 50px; margin-right: 5px; width: 20%; height: 75px; float: left; margin-bottom: 200px; background-color: #6b2cff; color: white;}',
	]
})
export class TimeKeeperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
