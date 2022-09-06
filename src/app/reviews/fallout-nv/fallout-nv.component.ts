import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fallout-nv',
  template: `
    <img src="assets/imgs/FNV/Header.jpg">
	<p class="title">Fallout: New Vegas</p>
	<div class="review-detail">
		<div class="review-first-letter">
			B
		</div>
		<div class="review-intro">	
			ienvenido al desierto de Mojave... O más bien, a lo que queda de él. Si, hace poco hubo una guerra nuclear, pero pudimos sobrevivir gracias a los refugios. Menos mal que hemos podido ir saliendo a la superficie teniendo cuidado con la radiación y con ayuda de la RNC, que se han ocupado de poner orden. Ahora apenas hay disturbios, salvo los que causan esos despiadados bandidos de la pólvora o esos locos que se hacen llamar La Legión ¡con su césar y todo! 
			<br><br>
		</div>
		<div class="review-paragraph">
			La mayoría de nosotros (todos menos la Hermandad de Acero) ya hacemos vida normal fuera de nuestros refugios: vivimos en pueblos y algunos, en New Vegas. Sí, sigue entera y ya vuelven a estar los casinos en funcionamiento. La excepción es el Lucky 38, el raro del Sr. House ya no deja entrar a nadie. Hay quien dice que planea hacer algo con esos robots… 
			<br><br>
			A pesar de todo, el mundo no ha cambiado; sólo los más ricos viven dentro del Strips y el resto de los mortales nos agrupamos para ayudarnos, como los Reyes o los seguidores del apocalipsis. Aunque también están los boomers, que viven al margen y sin usar la tecnología.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/FNV/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			¿Y tú qué? ¿Eres un lobo solitario o un tipo social? ¿Tienes vocación medicinal, o te decantas por la ciencia? ¿Puedes parar el tiempo para decidir a dónde disparar? ¿Quizá eres un manitas? Por favor, no me digas que te gusta robar cosas... O espiar…
			<br><br>
		</div>
		<div class="review-conclusion">
			En cualquier caso, todas tus habilidades vendrán bien y siempre habrá alguien dispuesto a escuchar las historias que tengas que contar. Eso sí, espero que vengas armado de paciencia porque te esperan muchas horas de conversación.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class FalloutNvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
