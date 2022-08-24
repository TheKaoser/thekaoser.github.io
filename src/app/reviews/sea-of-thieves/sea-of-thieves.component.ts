import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea-of-thieves',
  template: `
    <img src="assets/imgs/SOT/Header.jpg">
	<p class="title">Sea of Thieves</p>
	<div class="review-detail">
		<div class="review-first-letter">
			S
		</div>
		<div class="review-intro">	
			er un pirata que navega en su embarcación, solo o con una tripulación, nunca ha sido tan sencillo como con Sea of Thieves. Activa el micrófono y prepárate para cantar a los cuatro vientos tu repertorio marino.
			<br><br>
		</div>
		<div class="review-paragraph">
			Surcando la mar, buscamos resolver misiones con acertijos y trifulcas, fortalezas de esqueletos que se indican en el horizonte, naufragios o ir en busca de otros barcos rivales para robar sus botines. Sabemos cuando salimos, pero no cuando regresamos. Y esa incógnita constante es de vital importancia.
			<br><br>
			En cualquier caso, siempre perseguimos jugosas recompensas para llevarlas de vuelta a un puesto comercial, intentando no ser abordado y robado por otros jugadores. Con el oro, compramos apariencias para las distintas piezas de nuestro barco, ropajes o accesorios (armas, brújula, instrumentos…). Una recompensa insuficientemente jugosa, en mi opinión. Alguna sutil estadística para nuestro pirata no estaría de más. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/SOT/Gameplay.png">
		<div class="review-paragraph">
			<br>
			Las travesías conllevan diferentes tareas que se distribuyen entre la tripulación: manejar el timón, modificar la altura y dirección de las velas, comprobar el rumbo en el mapa, vigilar con el catalejo a barcos enemigos, disparar los cañones o el arpón contra posibles megalodones o pescar. Llegado el combate, no es nada del otro mundo. Podemos disparar o golpear con la espada. Sencillamente cumple.
			<br><br>
		</div>
		<div class="review-conclusion">
			Sea of Thieves es una experiencia de navegación en la que coordinar varias tareas piratas con amigos o desconocidos. Aunque conseguir apariencias no es algo del todo motivante, la exploración es suficiente para mantener el interés.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class SeaOfThievesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
