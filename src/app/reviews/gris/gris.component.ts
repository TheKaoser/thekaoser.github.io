import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gris',
  template: `
    <img src="assets/imgs/GRIS/Header.jpg">
	<p class="title">GRIS</p>
	<div class="review-detail">
		<div class="review-first-letter">
			G
		</div>
		<div class="review-intro">	
			RIS juega con los sentidos a través de coloridos escenarios, simbolismos visuales y la música para explicar metafóricamente aquello que siente la protagonista: falta de aceptación consigo que termina transformándose en reconciliación, representada por su canto en armonía.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/GRIS/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Las mecánicas son sencillas: convertirse en piedra para romper suelos, balancear estructuras con el peso, o resistir vientos; y un doble salto usándose de la falda, terminado en un planeo. Hay que combinarlas para resolver puzzles originales como la búsqueda de estrellas para formar constelaciones transitables, el puntual uso de una criatura que imita tus movimientos o el reflejo del agua que indica las paredes falsas. 
			<br><br>
		</div>
		<div class="review-conclusion">
			GRIS es una experiencia breve y bonita, bien acabada, que te hará disfrutar y reflexionar.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class GrisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
