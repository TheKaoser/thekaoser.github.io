import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-world-list',
  template: `
    <a routerLink="new-world"> 
		<div class="review-list">
			<p class="review-list-title is-size-1 is-bold">New World</p>
			<div class="review-list-description is-size-5 is-italic">
				"New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador."
			</div>
			<img class="review-list-image" src="assets/imgs/NW/NWHeader.jpg">
		</div>
	</a>
  `,
	styles: [
	]
})
export class NewWorldListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
