import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadows-of-mordor',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/SOM/Header.jpg">
	</div>
	<p class="title">Shadows of Mordor</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			s inusual que los enemigos de un juego se vean afectados a largo plazo por las acciones del jugador, haciendo de cada partida un reto diferente; Shadows of Mordor nos demuestra con sus Uruk Hai que es posible y lo hace con multitud de ideas de lo más interesantes.
			<br><br>
		</div>
		<div class="review-paragraph">
			Constantemente, aparecen eventos en el mapa en los que los Uruk, generados de forma aleatoria y única con una apariencia, un nombre, una forma de combate y unas debilidades, se enfrentan entre sí, ejecutan a algún traidor o demuestran su poder contra alguna criatura salvaje. Cada enfrentamiento tiene un resultado que lleva a los Uruks a ascender o desaparecer de su jerarquía, a reducir sus debilidades, crear alianzas o añadir títulos a su nombre. Esto provoca un conocimiento del jugador hacia una serie de enemigos, lo cual es intrigante y hace que quieras luchar contra los más fuertes. En especial, el más poderoso recibe el nombre de némesis y da nombre al sistema.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/SOM/Enemy.png">
		<div class="review-paragraph">
			<br>
			Pero la interacción no acaba aquí. El jugador también puede interrogar a algunos Uruks para obtener la información de las debilidades de otros y posteriormente puede controlar a algunos de los caudillos y hacer que se enfrente a otros para modificar la jerarquía. Le da un carácter estratégico y profundo que se combina con el combate de acción, basado en encadenar golpes a la par que atender a las indicaciones de contraataque o esquive, para obtener ejecuciones con las que acabar con los enemigos. Todo vestido con numerosas animaciones que disfrazan su simplicidad. También dispone de otras alternativas como el sigilo, el uso de escasos elementos del mapa, o el arco para encontrar disparos letales mientras se ralentiza el tiempo. La mayoría de los combates serán contra Uruks aunque también podremos enfrentarnos a Ghouls, Grougs o Caragors, e incluso montar sobre los dos últimos.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/SOM/Control.jpg">
		<div class="review-paragraph">
			<br>
			La historia, que carece de demasiada importancia salvo por ser la que desbloquea ciertas mecánicas, se ambienta en la tierra media durante una época anterior al viaje de Frodo y con numerosos guiños a la conocida aventura de Tolkien. En ella, nuestro protagonista montaraz, Talion, busca venganza por el asesinato de su familia ayudado por el difunto elfo Celebrimbor, forjador del anillo de poder y traicionado por Sauron. El segundo aporta a nuestro montaraz habilidades temáticas como el arco élfico, la “marca” de Uruks, para volverlos de nuestro lado, o la visión espiritual para detectar entre otras cosas los objetivos opcionales del mapa.
			<br><br>
		</div>
		<div class="review-conclusion">
			Shadows of Mordor y sus filas enemigas formadas de tus errores, resulta una experiencia innovadora, inquietante y, en ocasiones, frustrante. Aunque simplista y repetitivo en combate, logra mantener tu intriga y emoción hasta el final. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class ShadowsOfMordorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
