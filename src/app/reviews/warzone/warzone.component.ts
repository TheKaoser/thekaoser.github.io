import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warzone',
  template: `
    <img src="assets/imgs/Warzone/Header.jpg">
	<p class="title">Warzone</p>
	<div class="review-detail">
		<div class="review-first-letter">
			L
		</div>
		<div class="review-intro">	
			a popular y poco flexible franquicia Call of Duty creando algo gratuito, saliéndose de su estándar de partidas por equipos con los mismos modos de siempre, cross play entre todas las plataformas, con pase de batalla como los juegos modernos? Efectivamente. Así es Warzone, el espectacular battle royale de la mano de Activision.
			<br><br>
		</div>
		<div class="review-paragraph">
			Lo primero que llama la atención, tras saltar en paracaídas del avión que nos lleva, es la inmensidad de su mapa, con diversos tipos de lugares en los que se incluyen mapas adaptados de otros juegos como una estación de TV, un estadio, un hospital, un tren que se va desplazando por el mapa, una presa o una prisión entre otros. Resulta que sobre este mapa habrá más de cien jugadores, un número impresionante nunca visto en el género. Todo está hecho a través de fotogrametría por lo que los gráficos son impresionantes, a cambio de un rendimiento un tanto pesado, sin ser excesivo.
			<br><br>
			El objetivo final de las partidas, ya sea acompañado por hasta tres jugadores o solo, es acabar con el resto de equipos antes de que ellos lo hagan con el tuyo. Para ello debemos mantenernos dentro del área circular, rodeada de gas cada vez más pequeña e inicialmente aleatoria, usando o no medios de transporte, e ir recogiendo loot del suelo, cajas, enemigos o de tiendas con dinero obtenido, entre otras cosas, al completar desafíos llamados contratos. Los desafíos son una innovación propia, que queda muy bien al darnos entretenimiento mientras tratamos de sobrevivir hasta el final.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Warzone/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Lo más importante que podemos recoger son armas, que vienen con un número de accesorios acorde a su color que más tarde podemos modificar al encontrar nuevos. Estos pueden mejorar los disparos desde la cadera, aumentar sus distancias efectivas, potenciar el daño, hacerlas silenciosas. Lo segundo más importante es la munición, según el tipo de arma. Finalmente encontramos placas de escudo, para reducir el daño recibido, equipo táctico, como granadas cegadoras o un radar, equipo letal, como claymores o cócteles molotov o máscaras para resistir al gas durante unos segundos entre otras cosas. Todo esto, empleado de la forma correcta, es ventana a todo tipo de estrategias y situaciones con un alto nivel de habilidad intrínseco. 
			<br><br>
			En cierto momento de cada partida, accedemos a través de una caja de armamento a cambiar nuestro equipo por uno previamente configurado durante el menú. Quién lo obtenga antes determinará en gran medida los próximos enfrentamientos. Estos equipos están conformados por armas con accesorios, equipo táctico y letal y cosméticos gratis o de pago. También tienen ventajas, que permiten ver las huellas de enemigos, ser indetectable por miras térmicas, portar varias armas, recibir menos daño de explosivos o llevar dos armas principales entre otras.
			<br><br>
			Otra novedad es que, al morir por primera vez, dispones de una segunda oportunidad en la que te enfrentas a otro enemigo fallecido en un duelo 1v1 en el Gulag. El que gane puede reaparecer. Otra forma de hacer reaparecer a los compañeros es a través de la tienda.
			<br><br>
		</div>
		<div class="review-conclusion">
			Warzone transporta la pulida experiencia de la saga Call of Duty al género battle royale. Lo hace de manera única, añadiendo importantes innovaciones como los contratos, el Gulag o las clases personalizadas. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class WarzoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
