import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destiny',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/Destiny/Header.jpg">
	</div>
	<p class="title">Destiny 2</p>
	<div class="review-detail">
		<div class="review-first-letter">
			D
		</div>
		<div class="review-intro">	
			estiny 2 es un shooter looter futurista en el cual al entrar en el juego accederemos a un servidor donde hay otros jugadores con los que se puede interactuar y disfrutar mejorando nuestro equipo y habilidades.
			<br><br>
		</div>
		<div class="review-paragraph">
			Hay varias formas de progresar que, a pesar de su cantidad, se acaban encontrando similares y repetitivas. Están tanto esparcidas por el mapa, donde ocurren eventos en los que varios jugadores pueden participar, como actividades de matchmaking. Entre las últimas se  incluyen actividades como las campañas, mazmorras, enfrentamientos clásicos contra otros jugadores llamados crisoles y no tan clásicos, como los gambitos, en los que ambos equipos deben derrotar NPCs en mundos paralelos que pueden invadir para perjudicar al equipo rival. En todas las actividades afecta el desbalance de equipo de cada uno, lo cual convierte los modos competitivos, desgraciadamente, en aptos únicamente para veteranos. 
			<br><br>
			El nivel está oculto, se sube en todos los modos y determina el poder de las armas y armaduras que recibimos. Hay desafíos que se pueden adquirir y completar mientras se desarrollan otras actividades cuyas recompensas son objetos de mejora de equipamiento para fusionar un equipo con otro de mayor poder para adquirir el primero con el poder del segundo. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Destiny/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			El armamento consiste en un arma principal, una secundaria y otra especial. Tanto la secundaria como la especial tienen un atributo asignado que puede ser arco, vacío o solar y que sirve para destruir los escudos de protección de esos tipos de algunos enemigos y nos hará cambiar de arma según el enemigo. Hay también tres tipos de munición, que se recoge automáticamente al matar enemigos y nos forzará a ir alternando entre las armas. Conceptos que agregan diversión y habilidad.
			<br><br>
		</div>
		<div class="review-conclusion">
			Destiny 2 es un shooter muy completo (aunque se acaba haciendo repetitivo) en el que encontramos desafíos contra criaturas de la campaña o mazmorras, y contra jugadores, si nuestro tiempo jugando es el suficiente.  
		</div>
	</div>
  `,
  styles: [
  ]
})
export class DestinyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
