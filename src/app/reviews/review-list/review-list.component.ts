import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  template: `
    <div *ngFor="let review of reviews">
		<a routerLink={{review.link}}> 
			<div class="review-list">
				<p class="review-list-title is-size-1 is-bold">{{review.name}}</p>
				<div class="review-list-description is-size-6 is-italic">
					{{review.description}}
				</div>
				<img class="review-list-image" src={{review.image}}>
			</div>
		</a>
	</div>
  `,
	styles: [
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
