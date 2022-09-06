import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hades',
  template: `
    <img src="assets/imgs/Hades/Header.png">
	<p class="title">Hades</p>
	<div class="review-detail">
		<div class="review-first-letter">
			C
		</div>
		<div class="review-intro">	
			on una temática basada en los mitos griegos, Hades juega con el humor para representar las personalidades caricaturizadas de sus dioses, a la par que provoca el disfrute a los más entendidos con sus numerosas referencias.
			<br><br>
		</div>
		<div class="review-paragraph">
			El cometido de Zagreo, el protagonista, es escapar del inframundo y del control de su padre Hades mientras averigua la realidad sobre su madre desaparecida. Durante cada uno de sus muchos intentos, se ve beneficiado por una variedad de armas de la época en conjunto con habilidades específicas que podremos ir escogiendo de la mano de los diferentes dioses encontrados en nuestro avance hacia la libertad.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Hades/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Concretamente, iremos completando instancias escogidas aleatoriamente entre un conjunto suficientemente amplio para que resulten frescas y al salir de cada una se nos ofrecerán varios caminos con una pista sobre qué tipo de recompensa nos aguarda. Así, podremos buscar carencias en nuestra build para mejorar aspectos relacionados con la velocidad de ataque, la defensa o el daño entre otras. Como alternativa, podremos ir a por monedas para ajustar cuestiones a corto plazo (nuestra salud, impulsarnos durante instancias limitadas...), o conseguir mejoras lentas pero permanentes para que Zagreas se fortalezca a través de las diferentes huidas. Eventualmente, también podremos arriesgar parte de nuestra salud con la esperanza de obtener beneficios. A este árbol de decisiones se suman los premios que obtenemos por tomar determinadas decisiones para sumar variedad, tanto con armas y habilidades.
			<br><br>
		</div>
		<div class="review-conclusion">
			Por tanto, nos encontramos ante un roguelike táctico a múltiples niveles a la par que habilidoso, que ha sabido integrarse de forma magistral en una temática de lo más exigente.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class HadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
