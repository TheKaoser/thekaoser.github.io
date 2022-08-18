import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-into-the-breach',
  template: `
    <img src="assets/imgs/ITB/Header.jpg">
	<p class="title">Into the Breach</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			xisten géneros que nadie se atrevería a yuxtaponer por su ausencia de cohesión. Imagina un roguelike en el cual perdieras al morir el fruto de horas de medido esfuerzo de estrategia por turnos… Por fortuna también existen estudios lo suficientemente creativos para arriesgarse con ideas como esta.
			<br><br>
		</div>
		<div class="review-paragraph">
			Into the Breach es un juego de estrategia en el que accionar mecas para completar niveles generados aleatoriamente y así avanzar entre mapas. Cada nivel es un tablero sobre el que aparecen enemigos según el bioma con los que combatir a lo largo de 5 turnos. Solo 5, evitando que destruyan el máximo de centrales de energía asimismo distribuidas. Además, cada nivel dispone de desafíos opcionales para conseguir monedas y mejorar estadísticas.
			<br><br>
			Cada central destruida se resta a nuestra energía, para determinar si sigue la partida.... o si se reinicia guardando escasos progresos. A pesar del peso que esto supone, a través del ofertado abanico de escuadrones con los que jugar y la generación aleatoria de los niveles, es considerable empezar de nuevo. Pero ante todo, el sistema es merecedor de su existencia gracias a la tensión que suscita durante cada partida, haciendo cada movimiento meditado a conciencia.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/ITB/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Los niveles transcurren con estructuras similares. Cada turno, los enemigos se desplazan e indican sus objetivos de ataque. Lo mismo ocurre con eventos como paso de trenes, meteoritos, o bombardeos aéreos de terceros. Nuestra misión es evitar con nuestro escuadrón que dichos enemigos lo dañen, o a nuestras centrales y objetivos secundarios. Su set de habilidades varía según el escuadrón; algunas que dañan al enemigo, otras que los desplazan o los hace recibir más daño, y otras para proteger o teletransportar aliados. 
			<br><br>
			Al igual que los ataques enemigos, cada habilidad tiene su rango y su forma de viajar. Algo a tener muy en cuenta es el terreno y la colocación de los enemigos. Empujarlo contra el agua lo ahogará si no tiene la capacidad de volar, estrellarlo contra una montaña le hará uno de daño de colisión, pero no lo desplazará, bloquear un punto de aparición de un enemigo prevendrá su salida a cambio de una vida del bloqueador, desplazar a un enemigo puede hacer que ataque a su compañero…
			<br><br>
		</div>
		<div class="review-conclusion">
			En conjunto, el riesgo tomado ha dado como resultado una obra sólida y que mantiene la tensión del jugador hasta el final. La estrategia involucra varias capas de profundidad y numerosas combinaciones por turno en las que casi siempre hay una alternativa ideal.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class IntoTheBreachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
