import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remnant',
  template: `
    <img src="assets/imgs/Remnant/Header.jpg">
	<p class="title">Remnant: From the Ashes</p>
	<div class="review-detail">
		<div class="review-first-letter">
			I
		</div>
		<div class="review-intro">	
			nspirado (y a mucha honra) en los Dark Souls, Remnant consigue su propio nicho tomando ideas de aquí y de allá, las pule, y logra un combate difícil pero limpio y manejable. Si crees que al ser cooperativo no sufrirás, te equivocas; Sufrirás en compañía…  
			<br><br>
		</div>
		<div class="review-paragraph">
			Tras una historia sencilla y típica, basada en un virus que se extiende portando el mal, aparece espacio para varios escenarios con elementos y criaturas características. Cada partida que iniciemos los dispondrá de manera pseudo aleatoria añadiendo rejugabilidad a cambio de imperceptible pérdida de coherencia y propósito. Esto aplica también a jefes, con dos posibilidades por escenario, y a los objetos únicos, que al encontrar podremos quedarnos para siempre. Todo esto hace que podamos infiltrarnos en el mundo de nuestro compañero para ayudarle, sin renunciar a progresar y ser sorprendido. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Remnant/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			El combate es ambicioso y logrado; Necesitaremos precisión para acertar los puntos débiles del enemigo con nuestro rifle, pistola, francotirador o ballesta, por mencionar algunas armas. También tendremos que administrar las balas cuidadosamente, alternando entre la principal y secundaria, e incluso nuestra arma a corto alcance. Sí, hasta de eso disponemos. 
			<br><br>
			Con las armas, armaduras y objetos que vayamos encontrando personalizamos nuestro estilo para adecuarse a cada situación. Además, dos habilidades en forma de runas equipadas a nuestras armas nos permitirán afrontar las situaciones con diferentes estrategias hasta dar con la adecuada.
			<br><br>
		</div>
		<div class="review-conclusion">
			Remnant: From the Ashes es una experiencia ardua, pero balanceada. Con herramientas diferentes que permiten, junto con nuestra habilidad, adaptarse a las situaciones y enemigos diferentes que surjan. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class RemnantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
