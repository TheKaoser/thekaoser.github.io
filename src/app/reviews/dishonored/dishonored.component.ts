import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishonored',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/Dishonored/Header.jpg">
	</div>
	<p class="title">Dishonored</p>
	<div class="review-detail">
		<div class="review-first-letter">
			A
		</div>
		<div class="review-paragraph">
			unque ideado para ser una experiencia sigilosa, Dishonored es todo un sandbox de matar. Con una pistola o ballesta en la mano izquierda, un cuchillo en la derecha, y un set a tu elección de habilidades especiales que detienen el tiempo, controlan grupos de roedores o nos teleportan una corta distancia hacia la espalda del enemigo; al jugador se le presentan desde la interesante alternativa de poder solventar cada situación sin matar a nadie hasta la de masacrar a las almas más inocentes.
			<br><br>
			Nuestra motivación: liberar la ciudad de Dunwall de los ricos que la oprimen aprovechándose de la peste como excusa para purgar a los pobres. De una u otra forma, tendremos que instaurar a la secuestrada hija de la emperatriz como la nueva emperatriz para devolver la justicia. Pero no será sencillo, y nos veremos inmersos en cambios de poder repentinos, traiciones y varias decisiones condicionantes.que cambiarán el final de la historia.
			<br><br>
		</div>
		<div class="review-conclusion">
			Se trata de una experiencia con personalidad, aunque sin demasiadas innovaciones.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class DishonoredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
