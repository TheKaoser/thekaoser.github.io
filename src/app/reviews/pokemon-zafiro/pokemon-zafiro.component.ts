import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-zafiro',
  template: `
    <img src="assets/imgs/PZ/Header.jpg">
	<p class="title">Pokémon: Zafiro</p>
	<div class="review-detail">
		<div class="review-first-letter">
			U
		</div>
		<div class="review-intro">	
			na Pokédex, conformada por una de las miles de diferentes combinaciones de los Pokémon que gustemos. Sus habilidades, de nuevo, de nuestra elección. Las posibilidades de personalización que se ofrecen en Pokemon: Zafiro son tan altas que jamás encontraremos a otro jugador igual.
			<br><br>
		</div>
		<div class="review-paragraph">
			Como el resto de juegos de Pokémon, es una de las dos ediciones que salió al mercado. Esta vez  acompañado de Pokemon: Ruby, con diferentes Pokémon para que tengas que interactuar con otros jugadores para obtener todos a través de intercambios. A diferencia de la otra versión, la historia gira en torno al Pokémon ancestral de agua Kyogre que, a pesar de saberse oculto desde tiempos inmemoriales, es perseguido con fines malignos por el equipo Agua con el fin de liberarlo y usarlo para expandir el agua por el territorio de Hoenn. 
			<br><br>
			Nuestra misión será frustrar sus planes con los Pokemons que descubramos y decidamos entrenar. Durante la aventura nos enfrentaremos a, tal vez demasiados, Pokémon salvajes y entrenadores distribuidos por el mapa con los que podremos ir subiendo de nivel nuestro equipo. También iremos personalizándolos a base de MOs (Movimientos ocultos) como talar árboles, romper rocas, nadar o volar para poder acceder a nuevas zonas. Estos movimientos se conseguirán en los 6 Gimnasios Pokémon, con Pokémons de un tipo concreto y un líder. Además, podremos enfrentarnos a nuestros amigos en cualquier momento.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/PZ/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Cuando encuentras un Pokémon salvaje tienes la opción de intentar capturarlo lanzándole Pokeballs con diferentes probabilidades. Si el Pokémon es de menor nivel, tiene poca vida o está bajo los efectos paralizado, dormido, etc., la probabilidad aumenta. Todos los Pokémon tienen un tipo que determina sus debilidades. Tanto el tipo de cada Pokémon como estas debilidades son ocultas y relativamente complicadas de deducir; creo debería incluirse esta información en el juego.
			<br><br>
			Cada Pokémon tiene unas IVs aleatorias y ocultas, que definen sutilmente en qué medida escala cada uno de sus atributos cuando suban de nivel. También tendrán una personalidad que variará levemente de forma positiva o negativa alguno de sus atributos. Los atributos son el daño con ataques de tipo normal, el de ataques de tipo especial, la vida máxima, la defensa para resistir ataques de tipo normal, la que resiste el tipo especial, y la velocidad, que decidirá quién ataca primero cada ronda. A medida que suban de nivel, cada Pokémon desbloqueará nuevas habilidades que podrás reemplazar por una de sus 4 activas. Al llegar a cierto nivel, evolucionarán para poder desbloquear nuevas habilidades.
			<br><br>
		</div>
		<div class="review-conclusion">
			Aunque sencillo a primera vista, Pokemon: Zafiro esconde una gran profundidad y permite un rango abismal de horas de juego. Sin embargo, la falta de información básica como las debilidades o los escalados pueden terminar haciendo el combate monótono o la selección de Pokemon, arbitraria y terminar por aburrirnos.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class PokemonZafiroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
