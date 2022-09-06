import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darksiders-genesis',
  template: `
    <img src="assets/imgs/DSG/Header.jpg">
	<p class="title">Darksiders Genesis</p>
	<div class="review-detail">
		<div class="review-first-letter">
			G
		</div>
		<div class="review-intro">	
			uerra y Lucha son dos jinetes del apocalipsis, complementarios en carácter y forma de luchar, que tienen como objetivo derrotar al mal en una historia de lo más cómica y divertida.
			<br><br>
		</div>
		<div class="review-paragraph">
			Narrada a través de diálogos de estilo cartoon, se explican los hechos precedentes al resto de los Darksiders, innovando entre otras cosas en la perspectiva isométrica, lo cual le encaja perfectamente y lo hace apto para el cooperativo, su segunda gran innovación. En caso de jugar en solitario, el jugador irá alternando entre Guerra y Lucha. 
			<br><br>
			Desde un salón que actúa como lobby, iremos seleccionando el siguiente capítulo y estableciendo, con los recursos obtenidos, habilidades activas y pasivas. Cada capítulo podrá ser jugado en la dificultad elegida, variando así también la cantidad de recompensas, algo muy de agradecer. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/DSG/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Cada capítulo se desarrolla en un mapa; todos disponen de interesantes diseños y se pueden explorar en profundidad si se desean obtener todos sus recursos. Son muy diferentes y contienen en dosis similares acción frenética y puzzles que se resolverán combinando ciertas mecánicas de Lucha y Guerra. 
			<br><br>
			En combate ambos tienen un estilo propio. Lucha actúa desde la distancia, disparando y esquivando y Guerra, desde la cercanía, golpeando y absorbiendo golpes. Está balanceado y es  entretenido, aunque quizá un poco confuso en ocasiones.
			<br><br>
		</div>
		<div class="review-conclusion">
			Darksiders: Genesis es una experiencia cooperativa muy disfrutable que combina puzzles con acción, todo con un toque de humor. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class DarksidersGenesisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
