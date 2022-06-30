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
	]

	constructor() { }

	ngOnInit(): void {
	}

}
