import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-hero',
  template: `
    <img src="assets/imgs/LH/Header.jpg">
	<p class="title">Loop Hero</p>
	<div class="review-detail">
		<div class="review-first-letter">
			L
		</div>
		<div class="review-intro">
			oop Hero juega a vivir en la liga de los Tower Defense, pero le da la vuelta a la tortilla: en lugar de “defender” con distintos tipos de “torres” u obstáculos un camino recorrido por numerosos atacantes, nuestro héroe es el que recorre el camino, y nosotros colocamos dichos obstáculos. ¿Con qué objetivo? Combatir a los terribles jefes que aguardan en algún lugar del camino y que solo podremos derrotar con el equipamiento adecuado. Por eso queremos nos conviene desafiar a nuestro héroe para, llegado el momento, estar curtido.
			<br><br>
		</div>
		<div class="review-paragraph">
			Ya tenemos la ecuación, y da mucho de sí. En Loop Hero combatimos enemigos con la curva de dificultad que decidamos, eventualmente retirándonos o muriendo. Los enemigos caídos sueltan piezas de equipamiento, atributos pasivos en forma de paisajes que decoran el exterior del “loop”, y obstáculos para colocar estratégicamente. Una trinidad que funciona muy bien y que dará pie a ideas y combinaciones innovadoras. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/LH/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Retirarse a tiempo es clave. Cuando lo haces puedes llevar todo lo conseguido durante esa expedición a la base para aumentar atributos permanentes, crear objetos, desbloquear nuevas clases… Si mueres, la partida progresa un tercio de lo que lo hace si te retiras. Esa tensión, que crece tremendamente cuando tienes poca vida y es otra de las magias que ofrece el juego.
			<br><br>
		</div>
		<div class="review-conclusion">
			Loop Hero demuestra que es posible alternar ligeramente una fórmula popular para crear algo distinto y escalofriantemente adictivo.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class LoopHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
