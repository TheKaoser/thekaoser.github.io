import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizon-zero-dawn',
  template: `
    <img src="assets/imgs/HZD/Header.jpg">
	<p class="title">Horizon Zero Dawn</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
            ste título combina a la perfección elementos de un universo fantástico, original y muy ambicioso  basado en la convivencia de la cultura tribal con maquinaria del futuro, en concreto, animales robóticos de diferentes especies. 
			<br><br>
		</div>
		<div class="review-paragraph">
            Lo hace a través de una historia magníficamente hilada, en la que Aloy trata de averiguar su origen desconocido. A la par, va desvelando una realidad escalofriante: la tecnología llevó al mundo antiguo a su destrucción. Afortunadamente, la última generación de humanos logró prepararlo todo para una nueva era, a través de dos inteligencias artificiales: GAIA y HADES, que tenían como propósito la cooperación para lograr recrear las condiciones necesarias para el resurgimiento de la humanidad.     
			<br><br>
            Por medio de la increíblemente dotada Aloy junto con su Foco, hallado en unas ruinas del mundo antiguo, que nos permite analizar a los enemigos y escanear sus puntos débiles, podremos experimentar un gameplay muy diverso y entretenido de sigilo, sabotaje de robots para convertirlos en aliados, táctica, a través de la colocación estratégica de trampas, y acción, a base de lanzazos cuerpo a cuerpo y tiros con arco a distancia. Todo eso mientras aprendemos habilidades para ralentizar el tiempo momentáneamente, realizar nuevos golpes desde diferentes perspectivas y recolectar una mayor cantidad de objetos que nos servirán para fabricar flechas o restaurar nuestra salud entre otras muchas opciones. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/HZD/Combat.jpg">
		<div class="review-paragraph">
			<br>
			La aventura nos dará pie a explorar un inmenso mapa de mundo abierto repleto de riqueza en forma de cuidadas misiones secundarias; enormes robots llamados cuellilargos que, al ser escalados y saboteados, desbloquean la niebla del mapa a su alrededor; calderos, donde se crean los robots, que nos permitirán adquirir un conocimiento más profundo de ciertas máquinas para poder sabotearlas; o campamentos de bandidos que deberemos limpiar en los que podremos rescatar prisioneros o evitar que activen la alarma, llamando a refuerzos.
			<br><br>
            Una de las grandezas de la aventura es que ofrece espacio a la reflexión. La impecable forma en la que el enemigo está construido, a partir de creencias ciegas hacia algo que no puede comprender, pero que tú conoces; el trato de tu propia tribu: de alimaña al comienzo, a diosa cuando se desvela tu verdadero origen; la peligrosidad del progreso tecnológico, o el de la posible aparición de sentimientos en las inteligencias artificiales; o el dilema de si en la felicidad es influyente o no el conocimiento, y hasta qué punto la nueva generación de humanos debería poseerlo o vivir en la ignorancia.
			<br><br>
		</div>
		<div class="review-conclusion">
            En resumidas cuentas, el juego ofrece una experiencia muy completa en cuanto a historia, un entorno explorable a diferentes profundidades, y jugabilidad magnífica. Todo ello, como no podía ser de otro modo, acompañado de una excelente banda sonora. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class HorizonZeroDawnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
