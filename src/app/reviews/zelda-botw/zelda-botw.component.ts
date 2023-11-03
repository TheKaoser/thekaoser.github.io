import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zelda-botw',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/BOTW/Header.jpg">
	</div>
	<p class="title">The Legend of Zelda: Breath of the Wild</p>
	<div class="review-detail">
		<div class="review-first-letter">
			C
		</div>
		<div class="review-intro">	
			on su peculiar y colorido estilo gráfico sin gradientes y su incorporación en los mundos abiertos,  Breath of the Wild es uno de los juegos más queridos de la industria.
			<br><br>
		</div>
		<div class="review-paragraph">
			Como en Zeldas anteriores, el reino de Hyrule es dominado por el malvado Ganon. Link despierta tras 100 años dormido y, empieza a recordar a la princesa Zelda y su deber fallido, junto a otros 4 guerreros, de protegerla usando unas aparatos mecánicos llamados bestias divinas. En el pasado, Ganon acabó con los otros guerreros y la aprisionó en su castillo. 
			<br><br>
			La historia nos lleva por el reino de alternativos caminos para dominar de nuevo a las bestias divinas. La forma de hacerlo es destruir la corrupción que las posee desde su interior y revivir el alma del guerrero que las custodiaba. Reunido el suficiente poder, a considerar por el jugador, se puede enfrentar a Ganon y tratar de salvar a Zelda para restaurar el reino.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/BOTW/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Aparte de los elementos mencionados, el mapa guarda santuarios, torres Sheika, campamentos de enemigos y misiones secundarias. Los santuarios son entretenidos puzles que se resuelven a través de las habilidades de las que dispongamos, combinadas con ingenio. Su recompensa es sencilla: puntos para mejorar el máximo de vida o estamina usada para escalar, volar o combatir. Las torres confieren visión sobre el mapa circundante al escalarse y sirven como puntos de teletransporte.
			<br><br>
			El combate es diverso y original. Las armas tienen una vida que se agota muy rápido y obliga a exponerse a nuevas variantes. Aparte del clásico bloquear y esquivar, también se pueden lanzar y recoger del suelo. Los objetos metálicos se pueden levantar con la habilidad de imán, se pueden escalar árboles o muros para saltar desde las alturas disparando el arco y aterrizando con el uso de una paravela. 
			<br><br>
		</div>
		<div class="review-conclusion">
			La experiencia BOTW es completa y entretenida. Su combate y puzles son diversos e ingeniosos. Su historia dispone de algunos momentos emocionantes. Sin ser un juego super innovador logra desplazar la saga hacia un mundo abierto competente. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class ZeldaBotwComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
