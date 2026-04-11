import { Component } from '@angular/core';
import { games } from '../games';
import { Game } from '../game.model';

@Component({
	selector: 'app-review-list',
	template: `
	<div id="review-filters">
		<input id="review-filter-search" placeholder="Buscar..." class="is-italic small-text" [(ngModel)]="searchedGame" (ngModelChange)="filterByName()">
		<select id="review-filter-type" class="is-italic small-text" [(ngModel)]="chosenFilter" (ngModelChange)="filterByType()">
			<option value="" selected disabled hidden>Filtros</option>
			<option>Fecha ascendente</option>
			<option>Fecha descendente</option>
			<option>Puntuación ascendente</option>
			<option>Puntuación descendente</option>
		</select>
	</div>

  	<div id="review-list">
		<div class="review-element" *ngFor="let review of reviews; trackBy: trackByLink">
			<a [routerLink]="review.link"> 
				<div class="review-components">
					<div class="review-texts">
						<p class="review-list-title big-text is-bold">{{review.name}}</p>
						<div class="review-list-company small-text is-italic">{{review.company}}</div>
						<div class="review-list-date small-text is-italic">{{review.date}}</div>
						<div class="review-list-rating medium-text is-bold">{{review.rating}}</div>
					</div>
					<img class="review-list-image" [src]="review.image">
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#review-filters { display: flex; width: 70%; margin: auto; margin-bottom: 5%; justify-content: space-between; }',
		'#review-filter-search { background-color: #fff; height: 3vh; width: 40%; margin-bottom: 5%; border-radius: 10px; border: none; padding: 5px 1rem 5px 5px; }',
		'#review-filter-type { background-color: #6f56ff; height: 4vh; width: 45%; margin-bottom: 5%; border-radius: 10px; color: white; padding: 1px 1rem 3px 5px; }',
		'#review-list { display: flex; flex-direction: column; align-items: center; width: 100%; margin-bottom: 10%; }',
		'.review-element { position: relative; width: 70%; background-color: #6f56ff; border-radius: 10px; margin-bottom: 5%; }',
		'.review-element:hover { transform: scale(1.05); transition: transform 0.3s ease-in-out; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); }',
		'.review-components { display: flex; justify-content: space-between; }',
		'.review-texts { display: flex; flex-direction: column; margin: 2%; }',
		'.review-list-title { flex: 2; color: white; }',
		'.review-list-company { flex: 1; color: white; }',
		'.review-list-date { flex: 3; color: white; }',
		'.review-list-rating { flex: 1; align-self: left; color: white; }',
		'.review-list-image { border-radius: 10px; object-fit: contain; }',
		'@media screen and (max-width: 1200px){ .review-components { flex-direction: column; } .review-list-image { width: 100%; } .review-texts{ width: 90% }}',
		'@media screen and (min-width: 1200px){ .review-list-image { width: 40%; } .review-texts{ width: 60% }}',
	]
})
export class ReviewListComponent {
	chosenFilter = '';
	searchedGame = '';
	reviews: Game[] = [...games];

	trackByLink(_index: number, game: Game): string {
		return game.link;
	}

	filterByName(): void {
		this.reviews = this.searchedGame
			? games.filter(game => game.name.toLowerCase().includes(this.searchedGame.toLowerCase()))
			: [...games];
		this.applySort();
	}

	filterByType(): void {
		this.applySort();
	}

	private applySort(): void {
		switch (this.chosenFilter) {
			case 'Fecha ascendente':
				this.reviews.sort((a, b) => a.date - b.date);
				break;
			case 'Fecha descendente':
				this.reviews.sort((a, b) => b.date - a.date);
				break;
			case 'Puntuación ascendente':
				this.reviews.sort((a, b) => a.rating - b.rating);
				break;
			case 'Puntuación descendente':
				this.reviews.sort((a, b) => b.rating - a.rating);
				break;
		}
	}
}
