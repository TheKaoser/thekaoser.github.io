import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assassins-creed2',
  template: `
	<img src="assets/imgs/AC2/Header.jpg">
	<p class="title">Assassin's Creed 2</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			n este título se viven dos aventuras en paralelo: una en la actualidad, en la que los templarios se han hecho con el poder, y otra durante el renacimiento italiano, cuando se establece su dominancia. Desmond Miles, viajará hacia el pasado a través de un aparato llamado Animus para intentar evitar esto; en concreto, al cuerpo de su antepasado: Ezzio Auditore.
			<br><br>
		</div>
		<div class="review-paragraph">
			Ezzio dispone de unas habilidades increíbles de escalada que podemos usar en todo tipo de situaciones mientras recorremos las arquitectónicamente fieles ciudades de Florencia, Venecia, Toscana y Roma. La exploración sirve para obtener tesoros escondidos, llegar hasta atalayas que revelan mapa antes de realizar el famoso y escalofriante salto de fe, retirar carteles para dejar de ser perseguidos y, sobre todo, eliminar a múltiples enemigos usando las herramientas a nuestra disposición. A pesar de ser varias, conforman un combate sencillo y un tanto tosco basado en contraataques.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/AC2/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			También iremos descubriendo la historia que sufrió Ezzio, en la que su familia fue asesinada y cuya venganza va desentrañando la enorme red de corrupción liderada por los templarios. Poco a poco, descubrimos que se valen de un poder antiguo, encerrado en una cripta a la que solo puede acceder el profeta portador de fragmentos del edén. Al derrotar al líder de los templarios, Rodrigo Borgia, se desvela que Desmond es el profeta y que en su mano se halla salvar a la humanidad.
			<br><br>
		</div>
		<div class="review-conclusion">
			Assassin's Creed 2 es el juego perfecto para explorar la verticalidad de las ciudades italianas del renacimiento. Aunque el combate es un tanto tosco, y se compensa con la satisfacción de escalar al lugar que se antoje. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class AssassinsCreed2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
