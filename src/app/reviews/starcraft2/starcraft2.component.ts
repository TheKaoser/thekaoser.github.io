import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starcraft2',
  template: `
    <img src="assets/imgs/SC2/Header.jpg">
	<p class="title">Starcraft 2</p>
	<div class="review-detail">
		<div class="review-first-letter">
			C
		</div>
		<div class="review-intro">	
			on el preciso balance entre 3 facciones bien diferenciadas, Starcraft consigue crear partidas frenéticas para lo que es el género, con una amplia variedad de estrategias y mecánicas. 
			<br><br>
		</div>
		<div class="review-paragraph">
			Se usa únicamente de 2 recursos: uno principal, los minerales, y otro más avanzado, el vespeno. Estos se sitúan minuciosamente sobre los limitados mapas, diseñados a conciencia para adaptarse al número de jugadores que los ocupan. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/SC2/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Cada facción, Zerg, Terran y Protoss, cuenta con su modo de construir, ya sea a través de la fabricación, plantando una semilla o transformándose en la propia construcción. Las construcciones son complementarias y su orden de creación es influyente y permite acceder a nuevas creaciones. Las tropas tienen diferentes costes y mejoras, lo que hace que se pueda optar por ataques más o menos contundentes y en diferentes etapas de la partida.
			<br><br>
		</div>
		<div class="review-conclusion">
			Starcraft 2 es un juego de estrategia en tiempo real con gran dinamismo, en el que cada partida suscita interés y cuyo balance está optimizado gracias a contener opciones limitadas y precisas.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class Starcraft2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
