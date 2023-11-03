import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sekiro',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/Sekiro/Header.jpg">
	</div>
	<p class="title">Sekiro: Shadows Die Twice</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			n una versión alternativa, pero no menos mística del Japón feudal, donde los diversos clanes compiten por el poder, un shinobi debe proteger a su joven amo. Sí, ahí es donde entras tú!
			<br><br>
		</div>
		<div class="review-paragraph">
			Este no es un amo cualquiera, pues por sus venas corre una sangre especial con poder curativo. Y claro, los rumores corren rápido y los clanes descubren lo valiosa que sería esa sangre como herramienta para cambiar el curso de la guerra a su favor. Y por ello, lo perseguirán durante toda la aventura.
			<br><br>
			La atmósfera en la que se desarrolla Sekiro está cuidadosamente creada para adecuarse lo máximo posible a esta trama y tiene numerosos detalles escondidos, reservados para el que desee entender todos sus secretos.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Sekiro/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Por ejemplo, encontramos en un puente a un personaje claramente extranjero que defiende el acceso al otro lado. Esto es una referencia a los europeos, que empezaron a llegar a Japón en el siglo XVI. Pero ¿qué haría un comerciante defendiendo un lugar como ese?. Es por sus diálogos durante el combate que podremos deducir que lo hace para salvar a su hijo, probablemente enfermo. Si indagamos descubrimos que este comerciante ha viajado persiguiendo los rumores sobre el tratamiento que podría salvar a su hijo, la sangre de nuestro amo. Desgraciadamente, había sido engañado para proteger el puente a cambio de su sanación por quienes no tenían ese poder.
			<br><br>
			Los mapas también reflejan consistencia. Ninguna zona carece de propósito o resulta repetitiva. Catacumbas navegables, castillos, plazas, aldeas quemadas, puentes, templos, espesas nieblas... Su conexión es impecable, de manera que frecuentemente, tras atravesar un lugar inexplorado  vuelves a una zona conocida. Esto provoca un profundo interés por la exploración de todo el mapa y, cuando eres cautivado por ese interés, tienes montones de herramientas destinadas para ello. Así, por ejemplo, en la zona donde empezamos hay lo que aparentemente es un camino sin salida. Pero tan pronto como desbloqueemos nuestro gancho ninja se convertirá en una ruta nueva. Y más adelante, al aprender a bucear, cobra un nuevo interés.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Sekiro/Sneak.jpg">
		<div class="review-paragraph">
			<br>
			Nuestra relación con el juego es similar a la del shinobi con su katana. Al inicio, como él al coger su arma, empezamos manejando el juego con torpeza. Una pequeña pista para avisarnos de que está bien si el juego supone un desafío, pues a nuestro shinobi también se lo supone. Y aquí es donde entra el siguiente punto.
			<br><br>
			Todo esfuerzo tiene su recompensa. Sekiro no es una excepción. El desafío que supone derrotar a los enemigos que no logramos despistar con nuestro sigilo se resuelve en una euforia indescriptible al lograrlo.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Sekiro/Boss.jpg">
		<div class="review-paragraph">
			Las reglas básicas del combate son sencillas e innovadoras: tanto tú como el rival debéis reducir la postura contraria golpeándolo o desviando sus golpes en el instante preciso. En otras palabras, se trata de hacer parry constantemente. Cuando la postura del opuesto se quiebre, puede ser ejecutado. Por supuesto, hay otras herramientas que crean excepciones a estas reglas y que el jugador puede usar para determinar su propio estilo. ¿Qué clase de shinobi juega completamente limpio?
			<br><br>
			Además, gracias a la sangre que nuestro amo nos otorga en agradecimiento por nuestra fidelidad, se nos permite resucitar una vez. Un margen de error para los descuidos.
			<br><br>
			A pesar de todo, el combate supone un desafío basado en dos principios antagónicos: la crueldad y la nobleza. Crueldad porque los errores son castigados con dureza. Nobleza porque si aprendes de ellos puedes evitarlos. Cada ataque enemigo se muestra con antelación y claridad, y puede ser solventado de una forma u otra.
			<br><br>
		</div>
		<div class="review-conclusion">
			Como resultado, cuanto más avanzamos en la historia, más dominamos las técnicas que se proponen. Al enfrentarnos al enemigo final, en un combate que reúne todas las técnicas aprendidas, sentimos, esta vez, la dominancia.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class SekiroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
