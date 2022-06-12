import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  template: `
    <div *ngFor="let review of reviews">
		<a routerLink={{review.link}}> 
			<div id="review-list">
				<p id="review-list-title" class="is-size-1 is-bold">{{review.name}}</p>
				<div id="review-list-description" class="is-size-6 is-italic">
					{{review.description}}
				</div>
				<img id="review-list-image" src={{review.image}}>
			</div>
		</a>
	</div>
  `,
	styles: [
		'#review-list { position: relative; margin:auto; margin-bottom: 100px; width: 70%; height: 293px; background-color: #6f56ff; border-radius: 10px; }',
		'#review-list-title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#review-list-description { margin: 0; position: absolute; top: 50%; left: 10%; right: 55%; color: white; }',
		'#review-list-image { margin-left: 60%; width: 40%; border-radius: 10px; }',
	]
})
export class ReviewListComponent implements OnInit {
	reviews : { name: string, description: string, image: string, link: string }[] = [ 
		{ 
			name: "New World", 
			description : "New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador.", 
			image: "assets/imgs/NW/NWHeader.jpg",
			link: "new-world",
		},
		{ 
			name: "Lost Ark", 
			description : "Abarca muchos géneros, lugares y mecánicas para convertirse en uno de los MMOs más complejos y pulidos del momento.", 
			image: "assets/imgs/LA/LAHeader.png",
			link: "lost-ark",
		},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
