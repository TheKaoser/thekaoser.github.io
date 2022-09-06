import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident-evil-2',
  template: `
    <img src="assets/imgs/RE2/Header.jpg">
	<p class="title">Resident Evil 2</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			l ritmo al que los muchos objetos que encuentras en Resident Evil 2 van resolviendo sus enigmáticos objetivos está magistralmente ideado para mantener nuestro interés sin sobrepasar el borde de la frustración o la tensión. Con el único indicativo de qué salas tienen algún secreto por descubrir y cual en caso de haberlo visto, se conocen siempre los próximos lugares que explorar y es posible hacerlo en el orden elegido. 
			<br><br>
		</div>
		<div class="review-paragraph">
			La dificultad extrema no hace más que mejorar la experiencia agregando intensos incentivos, entre ellos el de escoger los zombies que eliminar con parte de nuestra escasa munición para liberar, si nuestra habilidad nos lo permite, pasillos estratégicos. También añade la necesidad de seleccionar los puntos de guardado usando cintas de tinta sobre máquinas de escribir, intentando que sean lo más distantes entre sí posible por su escasez, pero sin excederse y tener que repetir todo por algún tonto error. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/RE2/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Para culminar la tensión, los profundamente concurridos por nosotros mismos pasillos y por tanto probablemente memorizados, van modificando su fauna entre zombies de naturaleza torpe pero impredecible, lickers sordos pero de oído preciso y veloces, Mr. X, lento pero incesante en su persecución o Tyrant, una mutación terrible de gran aguante y su ojo como único punto débil. La historia da explicación a todo ello de forma correcta y culmina la obra convirtiéndola en inolvidable.
			<br><br>
		</div>
		<div class="review-conclusion">
			Resident Evil 2 condensa en un espacio limitado, interconectado y diseñado a conciencia, puzles que deberemos resolver bajo la tensión de enemigos, la escasez de munición y la memorización de objetos y rutas. Ello y su buena ejecución lo convierten en una obra maestra.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class ResidentEvil2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
