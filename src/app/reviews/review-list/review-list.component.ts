import { Component, OnInit } from '@angular/core';
import games from '../games';

@Component({
	selector: 'app-review-list',
	template: `
	<div id="review-filters">
		<input id="review-filter-search" placeholder="Buscar..." class="is-italic is-size-5" [(ngModel)]="searchedGame" (ngModelChange)="filterByName()">
		<select id="review-filter-type" class="is-italic is-size-5" [(ngModel)]="chosenFilter" (ngModelChange)="filterByType()">
			<option value="" selected disabled hidden>Filtros</option>
			<option>Fecha ascendente</option>
			<option>Fecha descendente</option>
			<option>Puntuación ascendente</option>
			<option>Puntuación descendente</option>
		</select>
	</div>

  	<div id="review-list">
		<div id="review-element" *ngFor="let review of reviews">
			<a routerLink={{review.link}}> 
				<div id="review-components">
					<div id="review-texts">
						<p id="review-list-title" class="is-size-1 is-bold">{{review.name}}</p>
						<div id="review-list-company" class="is-size-6 is-italic">{{review.company}}</div>
						<div id="review-list-date" class="is-size-6 is-italic">{{review.date}}</div>
						<div id="review-list-rating" class="is-size-3 is-bold">{{review.rating}}</div>
					</div>
					<img id="review-list-image" src={{review.image}}>
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#review-filters { display: flex; width: 70%; margin: auto; margin-bottom:5%; justify-content: space-between; }',
		'#review-filter-search { background-color: #fff; height: 3vh; width: 40%; margin-bottom:5%; border-radius: 10px; border: none; padding: 5px 1rem 5px 5px; }',
		'#review-filter-type { background-color: #6f56ff; height: 4vh; width: 45%; margin-bottom:5%; border-radius: 10px; color: white; padding: 1px 1rem 3px 5px; }',
		'#review-list { display: flex; flex-direction: column; align-items: center; width: 100% }',
		'@media screen and (max-width: 1200px){ #review-components { flex-direction: column; } #review-list-image { width: 100%; } #review-texts{ width: 100% }}',
		'@media screen and (min-width: 1200px){ #review-list-image { width: 40%; } #review-texts{ width: 60% }}',
		'#review-element { position: relative; width: 70%; background-color: #6f56ff; border-radius: 10px; margin-bottom:5%; }',
		'#review-components { display: flex; justify-content: space-between }',
		'#review-texts { display: flex; flex-direction: column; margin: 2%; }',
		'#review-list-title { flex: 2; color: white; }',
		'#review-list-company { flex: 1; color: white; }',
		'#review-list-date { flex: 3; color: white; }',
		'#review-list-rating { flex: 1; align-self: center; color: white; }',
		'#review-list-image { border-radius: 10px; }',
	]
})

export class ReviewListComponent implements OnInit {
	chosenFilter: string = "";
	searchedGame: string = "";
	reviews: { name: string, date: number, company: string, rating: number, image: string, link: string }[];
	auxReviews: { name: string, date: number, company: string, rating: number, image: string, link: string }[];

	constructor() {
		this.reviews = this.auxReviews = games;
	}

	ngOnInit(): void {
	}


	filterByName() {
		this.reviews = this.auxReviews;
		if (this.searchedGame != "")
		{
			this.reviews = this.reviews.filter((game => game.name.toLowerCase().includes(this.searchedGame.toLowerCase())));
		}
	}

	filterByType() {
		switch (this.chosenFilter) {
			case "Fecha ascendente": {
				this.reviews.sort((a, b) => a.date - b.date);
				break;
			}
			case "Fecha descendente": {
				this.reviews.sort((a, b) => b.date - a.date);
				break;
			}
			case "Puntuación ascendente": {
				this.reviews.sort((a, b) => a.rating - b.rating);
				break;
			}
			case "Puntuación descendente": {
				this.reviews.sort((a, b) => b.rating - a.rating);
				break;
			}
		}
	}

}
