import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batman',
  template: `
    <div class="splashart">
    	<img src="assets/imgs/Batman/Header.jpg">
  	</div>
	<p class="title">Batman: Arkham Asylum</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			l Joker ha escapado del manicomio en la isla de Arkham y, junto con Harley Quinn y el espantapájaros, está liberando al resto de presos y tiene capturado al Alcaide. Batman es el único a la altura de este desafío.
			<br><br>
		</div>
		<div class="review-paragraph">
			Este conocido personaje dispone de varias herramientas que se van desbloqueando a lo largo de la historia: alas para planear, un gancho para alcanzar lugares elevados, un batarang para aturdir enemigos a distancia, dispositivos para abrir puertas o hackear sistemas… Serán suficientes, junto con ciertas mejoras lineales, para sentir progresión durante la aventura.
			<br><br>
			El desarrollo, al igual que las mejoras, es bastante lineal y estándar. Lo compensa un poquito añadiendo a cada instancia un acertijo o trofeo oculto de opcional resolución.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Batman/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			El combate es sencillo y funcional, en ocasiones gustoso. Los golpes se dirigen automáticamente al enemigo más cercano y la dificultad reside en reaccionar a los indicadores encima de los enemigos para  contraatacar o esquivar dependiendo del ataque. Los enemigos con armas de fuego tienen un daño muy elevado y obligan a usar sigilo a través de conductos de ventilación y gárgolas para pillarlos desprevenidos. 
			<br><br>
			A medida que intentamos evitar la destrucción de la isla y devolver a Joker a su celda, descubrimos que está usando una fórmula para fortalecer a algunos de los presos incluida la peligrosa Hiedra venenosa. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Batman es una aventura con algunas mecánicas gustosas y una progresión lineal sin mucha sorpresa. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class BatmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
