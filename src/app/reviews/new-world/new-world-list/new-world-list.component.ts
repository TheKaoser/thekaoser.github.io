import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-world-list',
  template: `
    <a routerLink="new-world"> 
		<div class="review-list">
			<p id="title" class="is-size-1 is-bold">New World</p>
			<div id="description" class="is-size-5 is-italic">
				"New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador."
			</div>
			<div id="score" class="is-size-3 is-italic">
				9
			</div>
			<img id="review-image" src="assets/imgs/NW.jpg">
		</div>
	</a>
  `,
	styles: [
		'#title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#description { margin: 0; position: absolute; top: 40%; left: 10%; right: 55%; color: white; }',
		'#score { margin: 0; position: absolute; top: 70%; left: 10%; right: 55%; color: white; }',
		'#review-image { margin-left: 60%; margin-top: 2px; width: 40%; }',
	]
})
export class NewWorldListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
