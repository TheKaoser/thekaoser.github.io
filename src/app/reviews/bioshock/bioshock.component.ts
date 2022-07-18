import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bioshock',
  template: `
    <img src="assets/imgs/Bioshock/Header.jpg">
	<p class="title">Bioshock</p>
	<div class="review-detail">
		<div class="review-first-letter">
			R
		</div>
		<div class="review-intro">	
			apture, una utópica ciudad submarina; Ryan, un empresario que gobierna dicha ciudad; mutaciones genéticas llamadas ADAM; y un objetivo que cumplir. Bioshock transporta a quien lo juega a un mundo de lo más innovador y misterioso.
			<br><br>
		</div>
		<div class="review-paragraph">
			Resulta que Ryan buscaba crear un entorno libre y sin políticas en Rapture, pero comete el error de utilizar mutaciones capaces de mejorar la genética humana. En seguida, las clases bajas, incapaces de obtener dichas mejoras, acaban siendo marginadas y aquí entra nuestro papel: intentar, junto con muchos otros, acabar con este desequilibrio.
			<br><br>
			Durante el viaje se presenta la opción de salvar o matar a unas niñas llamadas Little sisters, protegidas por robots diseñados para el combate: los Big Daddys. Ellas son las utilizadas para incubar el ADAM y podremos matarlas para adquirirlo en beneficio propio, o de salvarlas sin obtener mejoras genéticas. Un interesante dilema que condiciona el final de la aventura. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/Bioshock/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Las mejoras genéticas, llamadas plásmidos, agregan poderes como un rayo que electrocuta a enemigos, una llama para quemarlos, un hipnotizador para volver enemigos de tu lado o telequinesis para bloquear y devolver proyectiles. Desafortunadamente, hay demasiados plásmidos y armas, lo que hace confuso qué usar cuando. 
			<br><br>
			A parte de eso, el combate se hace un poco tosco por otros motivos: se echa en falta un poco de movilidad; quizá una evasión o la posibilidad de activar el sprint harían el apaño. Lo mismo pasa con la ausencia de la capacidad de usar la mirilla de las armas para mayor precisión. 
			<br><br>
			Durante el juego se encuentran torretas con cámaras, puertas y cajas fuertes. Todo ello se pueden piratear a través de un minijuego para modificar su comportamiento a tu favor. El minijuego consiste en mover un fluido desde una posición a otra colocando los tubos correspondientes. Si bien es entretenido, a veces resulta un poco largo y, en ocasiones, se presentan puzzles irresolubles. 
			<br><br>
		</div>
		<div class="review-conclusion">
			A pesar de la tosquedad del combate y de algunas mecánicas relacionadas con la jugabilidad, Bioshock es una experiencia envolvente, cuyos escenarios y personajes la llenan de magia hasta llegar al sorprendente final.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class BioshockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
