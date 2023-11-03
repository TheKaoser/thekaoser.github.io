import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-witcher3',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/TW3/Header.jpg">
	</div>
	<p class="title">The Witcher 3</p>
	<div class="review-detail">
		<div class="review-first-letter">
			C
		</div>
		<div class="review-intro">	
			iri, la poderosa muchacha adiestrada por Geralt, perseguida por la más peligrosa amenaza: la cacería salvaje, quien conoce los lindes de su poder y quiere usarlos a su favor.
			<br><br>
		</div>
		<div class="review-paragraph">
			Junto a su caballo Roach, Geralt de Rivia busca el rastro de su querida alumna por las diferentes regiones enfrentadas: Velen, Novigrad y Skellige. Cada una le ofrece cierta información y favores que resolver. Y bien le conviene realizar algunos de ellos, pues aguarda una batalla contra la cacería salvaje, donde todo aliado es bienvenido. 
			<br><br>
			Tanto la historia como las relaciones con los personajes dependen de tus acciones. Alianzas y amores están en juego así que debes escoger sabiamente a quien agradar y, por ende, a quien disgustar. Por ejemplo, si conservar la amante de Geralt, la sofisticada Yennefer o decidir amar a Triss, una sencilla hechicera. En cualquier caso, las conversaciones se adaptan a nuestras decisiones y están bien construidas. Tras ellas se esconden varios finales en función de romances, política y la posible muerte de Ciri, en caso de no poseer la confianza necesaria en ella.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/TW3/Triss.jpg">
		<div class="review-paragraph">
			<br>
			Por desgracia, la jugabilidad deja qué desear. Según el enemigo, Geralt desenfunda la espada de plata o la de acero automáticamente con la única función de satisfacer el lore. Cada una tiene distintos tipos de ataque que podemos realizar sin grandes diferencias. Siguiente con el lore, hay diversos aceites que se pueden aplicar a la espada para hacer más daño a un determinado tipo de enemigo.
			<br><br>
			En cuanto a las mecánicas, se dispone de un contraataque que hay que activar en el momento justo para golpear, bloquear o apartar al enemigo según su tipo. Una ballesta para derribar enemigos aéreos y una barra de adrenalina que aumenta el daño cuanto más entrado el combate para acelerar combates largos. Como buen brujo, posee varios sellos mágicos: algunos de dudosa utilidad como Aard - para alejar enemigos o Yrden - que ralentiza y bloquea teletransportes. Otros, muy útiles: Igni, para quemar enemigos, Axii, para aturdirlos, o Quen, que bloquea el siguiente golpe. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/TW3/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Fuera de combate, podemos usar los sensores de brujo para mostrar objetos recolectables y objetivos de misión en forma de rastros. Ello permite esconder más los objetos raros y que sigan siendo detectables. Entre los tesoros del mapa se encuentran recetas para fabricar equipos reuniendo los materiales especificados. Lo mismo ocurre con los consumibles, que se recargan al descansar y pueden aumentar la visión en cuevas oscuras, curar o aumentar el daño. Sin embargo, consumir demasiados puede intoxicar a Geralt bajando su vida. El mapa también esconde piedras de poder, que otorgan al igual que el nivel un punto de habilidad para mejorar habilidades de ataque, defensa, alquimia o señales. 
			<br><br>
		</div>
		<div class="review-conclusion">
			The Witcher 3 esconde un abanico de posibilidades detrás de personalidades elaboradas y complejas. Su jugabilidad es muy consistente con lo que pretende narrar: la aventura del brujo de Rivia, lo cual compromete la jugabilidad con algunos desbalances: renuncias que no consiguen arrebatar su genialidad.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class TheWitcher3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
