import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zelda-ocarina-of-time',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/ZOT/Header.jpg">
	</div>
	<p class="title">Zelda: Ocarina of Time</p>
	<div class="review-detail">
		<div class="review-first-letter">
			D
		</div>
		<div class="review-intro">	
			esbloquear herramientas con las que acceder a nuevos lugares. Puzles que requieren el manejo combinado de los conocimientos anteriores. Zelda ya controlaba en 1998 los conceptos que encontramos hoy en día en cualquier juego medio y los combinaba con narrativas conexas y personajes carismáticos.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/ZOT/Ocarina.jpg">
		<div class="review-paragraph">
			<br>
			Desde el inicio donde Zelda nos tiende la ocarina del tiempo, ya se percibe la poesía del juego. Esta se manifiesta desde las melodías que se interpretan desde dicha ocarina para viajar entre lugares a la melancolía de la historia. Link, un simple niño, debe afrontar numerosos peligros que lo superan debido a su edad y madurez. Obligado a viajar 7 años en el futuro y así obtener el poder suficiente para estar a la altura de los hechos que se le presentan, se encontrará con su mundo consumido por el malvado Ganon. Para colmo, tras todo su sufrimiento durante la aventura, vuelve a la niñez, en la que nadie recuerda quién es.
			<br><br>
			La narrativa conduce a nuestro héroe a través de bosques, aldeas, lagos, volcanes y desiertos sumidos en el caos. Para salvarlos, disponen de puzles en los que se emplea mayoritariamente un nuevo y original artefacto como un gancho, unas botas para caminar sobre el cielo o una lupa para visualizar elementos que no se ven de forma natural. A estos puzles se intercalan pequeños enemigos a los que derrotar combinando ataques de espada, arco o evasiones y bloqueos. Finalmente, se halla un jefe con un secreto para ser derrotado y expugnar el mal de la zona. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/ZOT/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			En otras palabras, contiene conceptos sólidos y entretenidos, base de multitud de videojuegos de hoy en día. Sin embargo, se puede notar el paso del tiempo en la poca intuitividad de algunos puzles o duración excesiva de algunos enemigos. Por suerte, una piedra sheikah nos dará visiones acerca de cómo proseguir si nos atascamos.
			<br><br>
		</div>
		<div class="review-conclusion">
			Zelda: Ocarina of Time contiene una historia sólida y simple en la que brota melancolía sutil y contundentemente. Su gameplay es entretenido y complejo, en ocasiones excesivamente. Es una obra recomendable, incluso 25 años más tarde.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class ZeldaOcarinaOfTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
