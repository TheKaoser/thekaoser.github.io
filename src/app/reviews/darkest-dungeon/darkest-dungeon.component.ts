import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkest-dungeon',
  template: `
    <img src="assets/imgs/DD/Header.jpg">
	<p class="title">Darkest Dungeon</p>
	<div class="review-detail">
		<div class="review-first-letter">
			L
		</div>
		<div class="review-intro">	
			a aparente simpleza que envuelve a Darkest Dungeon esconde malignas intenciones, colmadas de difíciles decisiones y terribles consecuencias. Disponemos de una ciudad con varios habitantes diferentes que podemos curtir en combate paulatinamente deseando que no fallezcan accidentalmente.
			<br><br>
		</div>
		<div class="review-paragraph">
			Tanto la ciudad como sus habitantes, que llegan poco a poco para reponer las bajas, podrán beneficiarse de las riquezas obtenidas al exponerse a los riesgos del mundo exterior. Muchas de estas deberán destinarse a recuperar las heridas, enfermedades y la psicología de los enviados a dichas expediciones, por lo que conviene tener la ciudad preparada para ello. El resto, se podrán usar para reforzar a los desdichados que vayan a aventurarse próximamente.
			<br><br>
			El objetivo es completar misiones, cada vez más complejas y largas, con cuatro de nuestros ciudadanos, preferiblemente con roles combinados. Las salas de cada uno de los posibles destinos se generan aleatoriamente, lo cual las convierte siempre en entretenidas. En el recorrido encontraremos enemigos con los que luchar y objetos con los que interaccionar, todo involucra riesgos y recompensas. Las misiones requerirán un manejo acertado del limitado inventario que compromete sublimemente las riquezas recibidas con la garantía de completar la misión.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/DD/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Al llegar a una batalla, el factor aleatorio sigue apareciendo creando incertidumbre y tensión. Los personajes posiblemente atacarán ordenados por su velocidad, o quizá no. Llegado su turno, cada personaje puede activar una habilidad si su posición en su grupo es la adecuada. Estas afectarán las posiciones aliadas o enemigas que se especifiquen y tendrán efectos como alterar a favor o contra estadísticas propias o ajenas, modificar el orden de las formaciones y/o causar daños o efectos como hemorragia o infección. Todo con cierta probabilidad de impacto y de impacto crítico. Los defensores, tendrán una probabilidad de evasión, y una resistencia contra cada efecto. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Darkest Dungeon sumerge al jugador de culpabilidad y agonía. Desea que cada victoria sea celebrada y no regala alegrías. Sin embargo, lo hace justamente; estrategia con paciencia es todo lo que requiere. 	
		</div>
	</div>
  `,
  styles: [
  ]
})
export class DarkestDungeonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
