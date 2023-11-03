	import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-far-cry3',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/FC3/Header.jpg">
	</div>
	<p class="title">Far Cry 3</p>
	<div class="review-detail">
		<div class="review-first-letter">
			M
		</div>
		<div class="review-intro">	
			ientras veranean en una isla, Jason y sus amigos son capturados por una banda de piratas encabezada por un tal Vaas, un tipo completamente pirado. Su misión: escapar de dicha isla.
			<br><br>
		</div>
		<div class="review-paragraph">
			Far Cry 3 dispone un argumento sencillo que nos conduce por una colorida isla poblada de torres de radio que desbloquean porciones del mapa y cargada de recursos aprovechables. Los animales y plantas que recolectamos sirven para forjar mochilas, jeringuillas de sanación o fundas de armas. Fundas que se llenarán entre una gran selección de ejemplares.
			<br><br>
			También hay diversos puestos enemigos que se pueden conquistar para obtener un punto de teletransporte y experiencia. Si empeñas el ingenio suficiente, es posible hacerlo sin ser descubierto. En efecto, el sigilo es uno de los puntos fuertes, siendo muy ventajoso usarlo por la eliminación rápida de enemigos de esta forma y la prevención de que activen alarmas que llaman a más enemigos. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/FC3/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			El progreso permite adquirir habilidades pasivas para realizar ejecuciones en determinadas situaciones como coger el cuchillo de un enemigo al matarlo y lanzarlo, accionar su pistola o granada, eliminar al enemigo desde las alturas o desde el agua... Quizá lo más divertido sea planear estrategias para derrotar grupos enteros empleando las habilidades desbloqueadas de forma óptima y limpia.
			<br><br>
		</div>
		<div class="review-conclusion">
		Far Cry 3 es un mundo abierto sin una historia demasiado compleja que invita a ser explorado, a construir nuestro personaje y conquistar cada puesto de las formas más ingeniosas y particulares.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class FarCry3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
