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
		'#review-list { position: relative; margin:auto; margin-bottom: 100px; width: 70%; height: 300px; background-color: #6f56ff; border-radius: 10px; }',
		'#review-list-title { margin: 0; position: absolute; top: 15%; left: 10%; color: white; }',
		'#review-list-description { margin: 0; position: absolute; top: 50%; left: 10%; right: 55%; color: white; }',
		'#review-list-image { margin-left: 60%; width: 40%; border-radius: 10px; }',
	]
})
export class ReviewListComponent implements OnInit {
	reviews : { name: string, description: string, image: string, link: string }[] = [ 
		{ 
			name: "Zelda: Ocarina of Time", 
			description : "New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador.", 
			image: "assets/imgs/ZOT/Header.jpg",
			link: "zelda-ocarina-of-time",
		},
		{ 
			name: "Into the Breach", 
			description : "New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador.", 
			image: "assets/imgs/ITB/Header.jpg",
			link: "into-the-breach",
		},
		{ 
			name: "The Last of Us Parte 2", 
			description : "New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador.", 
			image: "assets/imgs/TLOU2/Header.png",
			link: "the-last-of-us2",
		},
		{ 
			name: "God of War", 
			description : "New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador.", 
			image: "assets/imgs/GOW/Header.jpg",
			link: "god-of-war",
		},
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
		{ 
			name: "Remnant: From the Ashes", 
			description : "Si crees que al ser cooperativo no sufrirás, te equivocas; Sufrirás en compañía.", 
			image: "assets/imgs/Remnant/Header.jpg",
			link: "remnant",
		},
		{ 
			name: "Dishonored", 
			description : "Aunque ideado para ser una experiencia sigilosa, Dishonored es todo un sandbox de matar.", 
			image: "assets/imgs/Dishonored/Header.jpg",
			link: "dishonored",
		},
		{ 
			name: "Loop Hero", 
			description : "En Loop Hero combatimos enemigos con la curva de dificultad que decidamos, eventualmente retirándonos o muriendo.", 
			image: "assets/imgs/LH/Header.jpg",
			link: "loop-hero",
		},
		{ 
			name: "Fallout: New Vegas", 
			description : "¿Eres un lobo solitario o un tipo social? ¿Tienes vocación medicinal, o te decantas por la ciencia? En cualquier caso tus habilidades vendrán bien en Fallout: New Vegas.", 
			image: "assets/imgs/FNV/Header.jpg",
			link: "fallout-nv",
		},
		{ 
			name: "Hades", 
			description : "Hades juega con el humor para representar mitos griegos, a la par que provoca el disfrute a los más entendidos con sus numerosas referencias.", 
			image: "assets/imgs/Hades/Header.png",
			link: "hades",
		},
		{ 
			name: "Resident Evil 2", 
			description : "Resident Evil 2 condensa en un espacio limitado, interconectado y diseñado a conciencia, puzles que deberemos resolver bajo la tensión de enemigos, la escasez de munición y la memorización de objetos y rutas.", 
			image: "assets/imgs/RE2/Header.jpg",
			link: "resident-evil-2",
		},
		{ 
			name: "Shadows of Mordor", 
			description : "Es inusual que los enemigos de un juego se vean afectados a largo plazo por las acciones del jugador, haciendo de cada partida un reto diferente; Shadows of Mordor nos demuestra con sus Uruk Hai que es posible.", 
			image: "assets/imgs/SOM/Header.jpg",
			link: "shadows-of-mordor",
		},
		{ 
			name: "Divinity: Original Sin 2", 
			description : "Pocos juegos permiten disfrutar tanto como este de la creatividad de los desarrolladores y de la propia.", 
			image: "assets/imgs/Divinity2/Header.jpg",
			link: "divinity2",
		},
		{ 
			name: "Tomb Raider", 
			description : "Constantes momentos de supervivencia a situaciones extremas e irrealistas y una protagonista resistente a cualquier tipo y cantidad de heridas.", 
			image: "assets/imgs/TR/Header.jpg",
			link: "tomb-raider",
		},
		{ 
			name: "Half Life: Alyx", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/HLA/Header.jpg",
			link: "half-life-alyx",
		},
		{ 
			name: "Red Dead Redemption", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/RDR/Header.jpg",
			link: "red-dead-redemption",
		},
		{ 
			name: "Nier Replicant", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/NR/Header.png",
			link: "nier-replicant",
		},
		{ 
			name: "GRIS", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/GRIS/Header.jpg",
			link: "gris",
		},
		{ 
			name: "Assassin's Creed 2", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/AC2/Header.jpg",
			link: "assassins-creed2",
		},
		{ 
			name: "Horizon Zero Dawn", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/HZD/Header.jpg",
			link: "horizon-zero-dawn",
		},
		{ 
			name: "Darksider Genesis", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/DSG/Header.jpg",
			link: "darksiders-genesis",
		},
		{ 
			name: "Metal Gear Solid 3", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/MGS3/Header.jpg",
			link: "metal-gear-solid3",
		},
		{ 
			name: "Starcraft 2", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/SC2/Header.jpg",
			link: "starcraft2",
		},
		{ 
			name: "Pokémon: Zafiro", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/PZ/Header.jpg",
			link: "pokemon-zafiro",
		},
		{ 
			name: "Doom", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Doom/Header.jpg",
			link: "doom",
		},
		{ 
			name: "Darkest Dungeon", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/DD/Header.jpg",
			link: "darkest-dungeon",
		},
		{ 
			name: "Cyberpunk 2077", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/CP2077/Header.png",
			link: "cyberpunk2077",
		},
		{ 
			name: "Cuphead", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Cuphead/Header.jpg",
			link: "cuphead",
		},
		{ 
			name: "Dark Souls 2", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/DS2/Header.jpg",
			link: "dark-souls2",
		},
		{ 
			name: "Black Desert Online", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/BDO/Header.jpg",
			link: "black-desert-online",
		},
		{ 
			name: "Batman", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Batman/Header.jpg",
			link: "batman",
		},
		{ 
			name: "Bioshock", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Bioshock/Header.jpg",
			link: "bioshock",
		},
		{ 
			name: "Ori and the Blind Forest", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Ori/Header.jpg",
			link: "ori",
		},
		{ 
			name: "Destiny 2", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Destiny/Header.jpg",
			link: "destiny",
		},
		{ 
			name: "Warzone", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Warzone/Header.jpg",
			link: "warzone",
		},
		{ 
			name: "Genshin Impact", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Genshin/Header.jpg",
			link: "genshin",
		},
		{ 
			name: "Final Fantasy VII", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/FFVII/Header.png",
			link: "ffvii",
		},
		{ 
			name: "Borderlands 2", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/Borderlands2/Header.jpg",
			link: "borderlands2",
		},
		{ 
			name: "Nier: Automata", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/NierAut/Header.jpg",
			link: "nier-automata",
		},
		{ 
			name: "The Last of Us", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/TLOU/Header.jpg",
			link: "the-last-of-us",
		},
		{ 
			name: "Far Cry 3", 
			description : "Aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular.", 
			image: "assets/imgs/FC3/Header.jpg",
			link: "far-cry3",
		},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
