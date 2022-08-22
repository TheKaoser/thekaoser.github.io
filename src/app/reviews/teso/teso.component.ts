import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teso',
  template: `
    <img src="assets/imgs/TESO/Header.jpg">
	<p class="title">The Elder Scrolls Online</p>
	<div class="review-detail">
		<div class="review-first-letter">
			D
		</div>
		<div class="review-intro">	
			ecenas de zonas cargadas de objetivos, misiones, excavaciones, puntos de teletransporte, skyshards que desbloquean puntos de habilidad y jefes de mundo que solo se pueden derrotar entre varios jugadores. Recorrer el mundo de The Elder Scrolls Online ya es en sí mismo ajetreado, y no es más que rascar la superficie de lo que ofrece.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/TESO/Summerset.jpg">
		<div class="review-paragraph">
			<br>
			El juego de mano de Bethesda está orientado al cooperativo. Los enemigos escalan al nivel de cada jugador por lo que se pueden hacer grupos dispares. Ello deja solo habilidades, pasivas y características del equipo como distintivos entre jugadores. Sutil, pero suficiente. La idea del cooperativo se extiende a las misiones, dobladas al inglés y con tramas variadas y llamativas. Los personajes involucrados tienen personalidad, intereses e intervenciones. En solitario o con amigos, a lomos de nuestra buena mascota, realizar estas misiones es un plato de gusto.
			<br><br>
			Aparte, encontramos otras actividades cooperativas. Las dungeons, repletas de loot según su dificultad, funcionan por cola de emparejamiento de 4 jugadores que deben coordinarse, desempeñar roles complementarios y conocer las mecánicas de los jefes. Los battlegrounds, también a través de emparejamiento, enfrentan 3 equipos de 4 jugadores en diferentes modos. Y la batalla de Cyrodiil, donde todos los jugadores separados en 3 facciones en función de las razas compiten por el dominio de varias estructuras en un mapa masivo y persistente.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/TESO/Dungeon.jpg">
		<div class="review-paragraph">
			<br>
			El combate es entretenido y depende en gran medida de la build que tengamos. Se forman a partir de las estadísticas básicas que otorga la raza y la clase, el equipo que uses y las habilidades que se escojan de un enorme árbol. Excepto la definitiva, no tienen cooldown y gastan magika o estamina. En conjunto se pueden equipar 5. A pesar de la build, todo personaje se orienta a un rol: damage dealer, healer o tank.
			<br><br>
			El equipo tiene un nivel y una rareza que determinan el resto de sus estadísticas. La estadística principal es la protección o ataque. Otra es la runa que decidamos, que aumenta alguna de las capacidades del equipo como el porcentaje de crítico o la estamina máxima. El tratamiento es parecido a la runa, pero viene grabada en el equipo. Finalmente, las habilidades del set son exclusivas de cada uno de los cientos de sets, por ejemplo, una invoca un oso cada ciertos golpes y otra recupera vida si te quedas con la mitad del magika. Algunos sets son extraordinariamente complicados de dropear en el mapa, otros pueden obtenerse sólo en dungeons veteranas, y otros se pueden fabricar. Algunos sets son muy conocidos y se pueden vender a otros jugadores por grandes cantidades de oro.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/TESO/Boss.jpg">
		<div class="review-paragraph">
			<br>
			Con el equipo restante se pueden hacer tres cosas: venderlo a mercaderes, desintegrarlo en estaciones del tipo correspondiente (blacksmithing, woodworking o clothing) o aprender el tratamiento que tiene si aún no lo conoces para la pieza concreta que sea, para poder traspasarlo a piezas similares. Si lo desintegras subes el nivel de esa rama de habilidades concreta, que permite posteriormente mejorar objetos con mayor probabilidad. 
			<br><br>
			En las ciudades, además, también hay NPCs dedicados al comercio que se pueden alquilar por los clanes que más ofrecen para vender las pertenencias del clan. Esto hace que surja una economía en la que los productos que más se venden están en las ciudades más transitadas. En estos clanes (de trading), todos los miembros pagan una cuota para que el clan pueda permitirse pagar por el NPC y deben superar con sus ventas el precio de la cuota, que puede ser muy elevado.
			<br><br>
		</div>
		<div class="review-conclusion">
			Como resultado, TESO es un MMO amplio, con un sistema cooperativo bastante casual y para todos los públicos. Del mismo modo, los veteranos pueden satisfacerse con complicadas dungeons y combates pvp, en los que conocer bien el juego y formarse una build con las amplias opciones disponibles marca la diferencia.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class TesoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
