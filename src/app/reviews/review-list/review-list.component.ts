import { Component, OnInit } from '@angular/core';
import { ReviewsComponent } from '../reviews.component';

@Component({
	selector: 'app-review-list',
	template: `
	<div id="review-filters">
		<input id="review-filter-search" class="is-italic is-size-5" [(ngModel)]="searchedGame" (ngModelChange)="filterByName()">
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
				<div>
					<p id="review-list-title" class="is-size-1 is-bold">{{review.name}}</p>
					<div id="review-list-company" class="is-size-6 is-italic">{{review.company}}</div>
					<div id="review-list-date" class="is-size-6 is-italic">{{review.date}}</div>
					<div id="review-list-rating" class="is-size-3 is-bold">{{review.rating}}</div>
					<img id="review-list-image" src={{review.image}}>
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#review-filters { display: flex; width: 70%; margin: auto; margin-bottom:5%; justify-content: space-between; }',
		'#review-filter-search { background-color: #fff; height: 3vh; width: 30%; margin-bottom:5%; border-radius: 10px; border: none; padding: 5px 3rem 5px 10px; }',
		'#review-filter-type { background-color: #6f56ff; height: 3vh; width: 30%; margin-bottom:5%; border-radius: 10px; color: white; }',
		'#review-list { display: flex; flex-direction: column; align-items: center; width: 100% }',
		'#review-element { position: relative; width: 70%; background-color: #6f56ff; border-radius: 10px; margin-bottom:5%; }',
		'#review-list-title { position: absolute; margin: 0; top: 15%; left: 10%; color: white; }',
		'#review-list-company { position: absolute; margin: 0; top: 38%; left: 10%; right: 55%; color: white; }',
		'#review-list-date { position: absolute; margin: 0; top: 47%; left: 10%; right: 55%; color: white; }',
		'#review-list-rating { position: absolute; margin: 0; bottom: 15%; left: 30%; right: 55%; color: white; }',
		'#review-list-image { margin-left: 60%; width: 40%; border-radius: 10px; }',
	]
})

export class ReviewListComponent implements OnInit {
	reviews: { name: string, date: number, company: string, rating: number, image: string, link: string }[] = [
		{
			name: "Zelda: Ocarina of Time",
			date: 1998,
			company: "Nintendo",
			rating: 8,
			image: "assets/imgs/ZOT/Header.jpg",
			link: "zelda-ocarina-of-time",
		},
		{
			name: "Into the Breach",
			date: 2018,
			company: "Subset Games",
			rating: 8,
			image: "assets/imgs/ITB/Header.jpg",
			link: "into-the-breach",
		},
		{
			name: "The Last of Us Parte 2",
			date: 2020,
			company: "Naughty Dog",
			rating: 9,
			image: "assets/imgs/TLOU2/Header.png",
			link: "the-last-of-us2",
		},
		{
			name: "God of War",
			date: 2018,
			company: "Santa Monica Studio",
			rating: 8,
			image: "assets/imgs/GOW/Header.jpg",
			link: "god-of-war",
		},
		{
			name: "Lost Ark",
			date: 2022,
			company: "Smilegate RPG",
			rating: 8,
			image: "assets/imgs/LA/LAHeader.png",
			link: "lost-ark",
		},
		{
			name: "Remnant: From the Ashes",
			date: 2019,
			company: "Gunfire Games",
			rating: 8,
			image: "assets/imgs/Remnant/Header.jpg",
			link: "remnant",
		},
		{
			name: "Dishonored",
			date: 2012,
			company: "Arkane Studios",
			rating: 6,
			image: "assets/imgs/Dishonored/Header.jpg",
			link: "dishonored",
		},
		{
			name: "Loop Hero",
			date: 2021,
			company: "Four Quarters",
			rating: 7,
			image: "assets/imgs/LH/Header.jpg",
			link: "loop-hero",
		},
		{
			name: "Fallout: New Vegas",
			date: 2010,
			company: "Obsidian Entertainment",
			rating: 8,
			image: "assets/imgs/FNV/Header.jpg",
			link: "fallout-nv",
		},
		{
			name: "New World",
			date: 2021,
			company: "Amazon Games",
			rating: 9,
			image: "assets/imgs/NW/NWHeader.jpg",
			link: "new-world",
		},
		{
			name: "Hades",
			date: 2020,
			company: "Supergiant Games",
			rating: 7,
			image: "assets/imgs/Hades/Header.png",
			link: "hades",
		},
		{
			name: "Resident Evil 2",
			date: 2019,
			company: "Capcom",
			rating: 9,
			image: "assets/imgs/RE2/Header.jpg",
			link: "resident-evil-2",
		},
		{
			name: "Shadows of Mordor",
			date: 2014,
			company: "Monolith Productions",
			rating: 7,
			image: "assets/imgs/SOM/Header.jpg",
			link: "shadows-of-mordor",
		},
		{
			name: "Divinity: Original Sin 2",
			date: 2017,
			company: "Larian Studios",
			rating: 9,
			image: "assets/imgs/Divinity2/Header.jpg",
			link: "divinity2",
		},
		{
			name: "Tomb Raider",
			date: 2013,
			company: "Crystal Dynamics",
			rating: 6,
			image: "assets/imgs/TR/Header.jpg",
			link: "tomb-raider",
		},
		{
			name: "Half Life: Alyx",
			date: 2020,
			company: "Telltale Games",
			rating: 10,
			image: "assets/imgs/HLA/Header.jpg",
			link: "half-life-alyx",
		},
		{
			name: "Red Dead Redemption",
			date: 2010,
			company: "Rockstar",
			rating: 7,
			image: "assets/imgs/RDR/Header.jpg",
			link: "red-dead-redemption",
		},
		{
			name: "Nier Replicant",
			date: 2021,
			company: "Square Enix",
			rating: 7,
			image: "assets/imgs/NR/Header.png",
			link: "nier-replicant",
		},
		{
			name: "GRIS",
			date: 2018,
			company: "Nomada Studio",
			rating: 7,
			image: "assets/imgs/GRIS/Header.jpg",
			link: "gris",
		},
		{
			name: "Assassin's Creed II",
			date: 2009,
			company: "Ubisoft",
			rating: 6,
			image: "assets/imgs/AC2/Header.jpg",
			link: "assassins-creed2",
		},
		{
			name: "Horizon Zero Dawn",
			date: 2017,
			company: "Guerrilla Games",
			rating: 8,
			image: "assets/imgs/HZD/Header.jpg",
			link: "horizon-zero-dawn",
		},
		{
			name: "Darksider Genesis",
			date: 2019,
			company: "Airship Syndicate",
			rating: 8,
			image: "assets/imgs/DSG/Header.jpg",
			link: "darksiders-genesis",
		},
		{
			name: "Metal Gear Solid 3",
			date: 2004,
			company: "Konami",
			rating: 8,
			image: "assets/imgs/MGS3/Header.jpg",
			link: "metal-gear-solid3",
		},
		{
			name: "Starcraft 2",
			date: 2010,
			company: "Blizzard Entertainment",
			rating: 8,
			image: "assets/imgs/SC2/Header.jpg",
			link: "starcraft2",
		},
		{
			name: "Pokémon: Zafiro",
			date: 2002,
			company: "Game Freak",
			rating: 7,
			image: "assets/imgs/PZ/Header.jpg",
			link: "pokemon-zafiro",
		},
		{
			name: "Doom",
			date: 2016,
			company: "id Software",
			rating: 8,
			image: "assets/imgs/Doom/Header.jpg",
			link: "doom",
		},
		{
			name: "Darkest Dungeon",
			date: 2015,
			company: "Red Hook Studios",
			rating: 9,
			image: "assets/imgs/DD/Header.jpg",
			link: "darkest-dungeon",
		},
		{
			name: "Cyberpunk 2077",
			date: 2020,
			company: "CD Projekt RED",
			rating: 9,
			image: "assets/imgs/CP2077/Header.png",
			link: "cyberpunk2077",
		},
		{
			name: "Cuphead",
			date: 2017,
			company: "Sudio MDHR",
			rating: 8,
			image: "assets/imgs/Cuphead/Header.jpg",
			link: "cuphead",
		},
		{
			name: "Dark Souls II",
			date: 2014,
			company: "FromSoftware",
			rating: 8,
			image: "assets/imgs/DS2/Header.jpg",
			link: "dark-souls2",
		},
		{
			name: "Black Desert Online",
			date: 2014,
			company: "Pearl Abyss",
			rating: 7,
			image: "assets/imgs/BDO/Header.jpg",
			link: "black-desert-online",
		},
		{
			name: "Batman",
			date: 2009,
			company: "Rocksteady Studios",
			rating: 6,
			image: "assets/imgs/Batman/Header.jpg",
			link: "batman",
		},
		{
			name: "Bioshock",
			date: 2007,
			company: "Irrational Games",
			rating: 7,
			image: "assets/imgs/Bioshock/Header.jpg",
			link: "bioshock",
		},
		{
			name: "Ori and the Blind Forest",
			date: 2016,
			company: "Moon Studios",
			rating: 6,
			image: "assets/imgs/Ori/Header.jpg",
			link: "ori",
		},
		{
			name: "Destiny 2",
			date: 2017,
			company: "Bungie",
			rating: 6,
			image: "assets/imgs/Destiny/Header.jpg",
			link: "destiny",
		},
		{
			name: "Warzone",
			date: 2020,
			company: "Infinity Ward",
			rating: 8,
			image: "assets/imgs/Warzone/Header.jpg",
			link: "warzone",
		},
		{
			name: "Genshin Impact",
			date: 2020,
			company: "miHoYo",
			rating: 7,
			image: "assets/imgs/Genshin/Header.jpg",
			link: "genshin",
		},
		{
			name: "Final Fantasy VII",
			date: 1997,
			company: "Square Enix",
			rating: 8,
			image: "assets/imgs/FFVII/Header.png",
			link: "ffvii",
		},
		{
			name: "Borderlands 2",
			date: 2012,
			company: "Gearbox Software",
			rating: 7,
			image: "assets/imgs/Borderlands2/Header.jpg",
			link: "borderlands2",
		},
		{
			name: "Nier: Automata",
			date: 2017,
			company: "PlatinumGames",
			rating: 8,
			image: "assets/imgs/NierAut/Header.jpg",
			link: "nier-automata",
		},
		{
			name: "The Last of Us",
			date: 2013,
			company: "Naughty Dog",
			rating: 7,
			image: "assets/imgs/TLOU/Header.jpg",
			link: "the-last-of-us",
		},
		{
			name: "Far Cry 3",
			date: 2013,
			company: "Ubisoft",
			rating: 7,
			image: "assets/imgs/FC3/Header.jpg",
			link: "far-cry3",
		},
		{
			name: "Hollow Knight",
			date: 2017,
			company: "Team Cherry",
			rating: 9,
			image: "assets/imgs/HK/Header.jpg",
			link: "hollow-knight",
		},
		{
			name: "The Witcher 3",
			date: 2015,
			company: "CD Project RED",
			rating: 8,
			image: "assets/imgs/TW3/Header.jpg",
			link: "the-witcher3",
		},
		{
			name: "The Elder Scrolls Online",
			date: 2014,
			company: "Dire Wolf Digital",
			rating: 8,
			image: "assets/imgs/TESO/Header.jpg",
			link: "teso",
		},
		{
			name: "Zelda: Breath of the Wild",
			date: 2017,
			company: "Nintendo",
			rating: 8,
			image: "assets/imgs/BOTW/Header.jpg",
			link: "zelda-botw",
		},
		{
			name: "Sekiro",
			date: 2019,
			company: "FromSoftware",
			rating: 10,
			image: "assets/imgs/Sekiro/Header.jpg",
			link: "sekiro",
		},
		{
			name: "Sea of Thieves",
			date: 2017,
			company: "Rare",
			rating: 7,
			image: "assets/imgs/SOT/Header.jpg",
			link: "sea-of-thieves",
		},
	]

	chosenFilter: string = "";
	searchedGame: string = "";
	auxReviews: { name: string, date: number, company: string, rating: number, image: string, link: string }[];

	constructor() {
		this.auxReviews = this.reviews;
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
