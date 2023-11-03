import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doom',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/Doom/Header.jpg">
	</div>
	<p class="title">Doom</p>	
	<div class="review-detail">
		<div class="review-first-letter">
			S
		</div>
		<div class="review-intro">	
			on muchos los elementos que convierten a este título en frenético: desde la música con guitarras distorsionadas, baterías y coros celestiales, a las impresionantes y originales animaciones al ejecutar enemigos con poca vida. Doom vuelve a revolucionar el mundo de los shooters con una entrega de lo más impresionante.
			<br><br>
		</div>
		<div class="review-paragraph">
			Constantemente debemos estar concentrados y tomar decisiones. Habrá que esquivar ataques a la par que seleccionar arma para el siguiente enemigo, decidir cuándo arriesgarse a ejecutarlo para reponer vida o desgarrarlo con la motosierra gastando gasolina, para reponer munición. Todo mientras exploramos la zona en búsqueda de armadura, esparcida por el suelo.
			<br><br>
			A ese gameplay tan gratificante se van sumando nuevos demonios que aniquilar con sus ataques y debilidades, nuevos escenarios de diferentes estéticas y, como no, una historia, consistente en enmendar los errores de la humanidad, cuya ambición los llevó a acceder al infierno para enviar energía a la tierra. Nuestro deber será cerrar el descontrolado portal entre ambos mundos. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Doom/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Otro factor que alienta nuestra progresión es el desbloqueo sucesivo de, quizá demasiadas y con diseños un tanto similares, armas. De estas podremos elegir una habilidad secundaria y mejorarla con puntos obtenidos en el combate. A esto se suman mejoras de nuestro traje: habilidades, runas con algún modificador de combate y mejoras del máximo de vida, armadura o munición.
			<br><br>
		</div>
		<div class="review-conclusion">
			Doom ofrece una experiencia refrescante y bella. Nunca aniquilar demonios había sido tan desafiante, satisfactorio y rockero. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class DoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
