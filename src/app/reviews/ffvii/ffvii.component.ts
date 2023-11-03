import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ffvii',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/FFVII/Header.png">
	</div>
	<p class="title">Final Fantasy VII</p>
	<div class="review-detail">
		<div class="review-first-letter">
			L
		</div>
		<div class="review-intro">	
			a omnipotente compañía Shinra ha acabado controlando la energía del planeta a través de generadores Mako; otrora, tarea de los justos y poderosos Cetra, lamentablemente extinguidos; caídos en el olvido. En este escenario comienza el icónico juego de la saga Final Fantasy, famoso por su música y ser uno de los pioneros del extendido género JRPG.
			<br><br>
		</div>
		<div class="review-paragraph">
			A pesar de sus limitaciones: un mapa en 2D con personajes low poly o una historia narrada a través de bocadillos… FFVII posee algunos de los personajes más emblemáticos incluso a día de hoy, gracias a su desarrollo a través del humor y sencillas animaciones.  
			<br><br>
			Junto a 3 compañeros que varían a lo largo de la aventura, Cloud lucha contra la todopoderosa Shinra. En seguida, conocemos a sus compañeros Barret y Tifa, y aprendemos la dinámica del combate por turnos en la que cada uno tiene un ataque con su arma principal y una habilidad especial que se va recargando. Añadimos a las ranuras de sus armas principales y piezas de armadura materias, cuyo uso requiere maná. Las materias pueden hacer daño con distintos atributos, curar, comprobar la vida del enemigo o robar objetos. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/FFVII/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Tras varios combates y diálogos en mapas variados paseados en chocobo, encontrar a Aeris, raptada por Shinra, y al emblemático perro Red XIII, conocemos a Sephiroth. Este es ex compañero de Cloud en un tiempo en que ambos trabajaban en la antagónica empresa. Desgraciadamente, Shinra modificó con su energía a Sephiroth, al igual que hacía con sus soldados, y ahora quiere usar ese poder para destruir no solo a Shinra, si no todo el planeta. Tras una dura batalla, Cloud vence a Sephiroth, aunque es demasiado tarde y Aeris se sacrifica por salvarlos a todos; era una Cetra.
			<br><br>
		</div>
		<div class="review-conclusion">
			Final Fantasy VII posee un argumento adulto y profundo, unos personajes muy carismáticos y un combate extensamente configurable. Aunque posee limitaciones y es lento de jugar, sigue siendo muy recomendado.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class FfviiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
