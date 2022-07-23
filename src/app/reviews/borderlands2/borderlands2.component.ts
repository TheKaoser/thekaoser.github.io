import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borderlands2',
  template: `
    <img src="assets/imgs/Borderlands2/Header.jpg">
	<p class="title">Borderlands 2</p>
	<div class="review-detail">
		<div class="review-first-letter">
			C
		</div>
		<div class="review-intro">	
			on un estilo gráfico 3D super característico que parece dibujado y un humor ridiculizante muy presente, entretenido e irritante a partes iguales, Borderlands 2 saca sus aristas y se hace reconocer fácilmente.
			<br><br>
		</div>
		<div class="review-paragraph">
			En su raíz es un RPG cuya historia principal, llena de humor y momentos inesperadamente catastróficos, consiste en derrotar a un villano llamado Jack el Guapo (véase el humor) a la par que se presentan una serie de misiones secundarias. Algo de lo que peca, es forzar a completar un porcentaje de estas misiones, penalizando con enemigos demasiado difíciles de lo contrario. 
			<br><br>
			Para moverse entre escenarios, existen vehículos que pueden disparar a las bestias del camino y que hacen respirar exitosamente del bucle de juego. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/Borderlands2/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Al comenzar, escogemos uno de los 6 personajes. Un aspecto sobre todo apreciado en el online, donde experimentamos sus sinergias. Cada uno tiene su propio aspecto variable, una habilidad única como una torreta, invisibilidad o un orbe que absorbe enemigos y 3 árboles de habilidades entre los que elegir. Como es de esperar, tenemos un nivel, que desbloquea drops más poderosos y puntos de habilidad para invertir en dichos árboles. 
			<br><br>
			Uno de sus puntos fuertes, son sus drops, que se reciben abriendo cofres de distintas rarezas o de vez en cuando al matar enemigos. En concreto, porque se generan de forma aleatoria. Recibimos armas fruto de la combinación de varios tipos (pistolas, escopetas, francotiradores…), infinidad de diseños, elementos, balas usadas por disparo, forma de recarga (algunas se lanzan para hacer daño)... Lo mismo pasa con las granadas con sus diversos tipos de explosión y efectos, los escudos, y sus diferentes capacidades, cooldowns y efectos secundarios o reliquias, que dan mejoras aleatorias.
			<br><br>
			El online está muy bien integrado ya que solo hay que publicar tu partida para que otros jugadores puedan acceder en cualquier momento y así ayudar a desempeñar las misiones que tengas disponibles. Si acuchillas a un jugador comenzará un duelo que terminará cuando uno de los dos muera.
			<br><br>
		</div>
		<div class="review-conclusion">
			Borderlands 2 es un RPG con varios distintivos que logra atrapar a su público y mantenerlo por varias horas, tanto en solitario como en grupos. Sin embargo, su escalada curva de dificultad, si no se acompaña con el nivel, crea situaciones de farmeo frustrantes, que pueden sacar a uno del momentum.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class Borderlands2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
