import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ori',
  template: `
    <img src="assets/imgs/Ori/Header.jpg">
	<p class="title">Ori and the Blind Forest</p>
	<div class="review-detail">
		<div class="review-first-letter">
			O
		</div>
		<div class="review-intro">	
			ri and the Blind Forest es un sencillo, estéticamente atractivo y clásico metroidvania que narra una bonita y concisa historia.  
			<br><br>
		</div>
		<div class="review-paragraph">
			Durante la aventura iremos desbloqueando varias mecánicas: doble salto, dash, caída fuerte, salto cargado, planeo con corrientes hacia arriba y uso de proyectiles para deslizarse en dirección opuesta. Como es habitual, van añadiendo nuevos caminos al mapa para poder continuar.
			<br><br>
			La historia es sencilla y sentimental. El corazón del bosque ha sido robado por el búho Kuro, resentido por la muerte de sus hijos; por tanto debemos salvar el bosque devolviendo su agua, viento y quitando la lava. Finalmente, nos sorprenderá y sobrecogerá el propio Kuro siendo quien, momentos antes de querer matarnos junto a nuestro padre, se vea identificado y restaure el mismo el bosque sacrificándose.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/Ori/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Algo en lo que destaca Ori, son unos momentos frenéticos en los que deberemos escapar de algún elemento de forma veloz. Para ello acabaremos conociendo la ruta de escape a la perfección, tras varios intentos.
			<br><br>
		</div>
		<div class="review-conclusion">
			En conclusión, Ori and the Blind Forest es un juego pulido que, sin innovar demasiado, consigue destacar en visuales y añadir frenetismo al género, además de romper nuestro corazón con la historia.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class OriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
