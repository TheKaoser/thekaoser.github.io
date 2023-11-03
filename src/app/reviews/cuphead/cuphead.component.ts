import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuphead',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/Cuphead/Header.jpg">
	</div>
	<p class="title">Cuphead</p>
	<div class="review-detail">
		<div class="review-first-letter">
			A
		</div>
		<div class="review-intro">	
			postar el alma al diablo y perder. La premisa de Cuphead insta a dos amigos a completar varios desafíos para tratar de recuperarlas. Una tarea compleja, como no podía ser de otra manera.
			<br><br>
		</div>
		<div class="review-paragraph">
			Lo primero que nos sorprende es el estilo gráfico, basado en los dibujos animados de los 1930 y acompañado de una banda sonora de jazz. Estos ingredientes ya son suficientes para conquistarnos, aunque el gameplay tampoco se queda atrás…
			<br><br>
			En nuestra travesía encontramos distintos tipos de desafíos entre ellos jefes que se desarrollan en pantallas fijas o “ run and gun”, en los que hay que llegar de un punto A a un punto B separados por plataformas y enemigos.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Cuphead/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Durante cada desafío disponemos de tres vidas, otra elección clásica. Como herramientas defensivas tenemos un deslizamiento y un salto. Este puede ser doble si lo realizamos sobre algo rosa, destruyéndolo, cambiando su estado, o reanimándolo, si es el aliado. Y como armas, tenemos dos con cargador infinito y una habilidad súper que se va recargando, todo elegido entre nuestro arsenal antes de cada desafío. Además, podemos cambiar las reglas con amuletos, teniendo una vida extra a cambio de menos daño, un deslizamiento invulnerable o recargando más deprisa la habilidad súper.
			<br><br>
			La dificultad es un factor clave; es un juego difícil, pero equilibrado. Hace que puedas apreciar durante más tiempo el arte de cada desafío, aprendas los patrones bien y que aguardes con paciencia el siguiente. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Cuphead es un desafío digno de la historia que propone. Te hará llorar, gritar y pasar adrenalina. Por suerte, tendrás a tu colega para consolarte.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class CupheadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
