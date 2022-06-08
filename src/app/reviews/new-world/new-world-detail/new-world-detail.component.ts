import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-new-world-detail',
	template: `
  		<img src="assets/imgs/NWHeader.jpg">
		<p class="title is-size-1 is-bold">New World</p>
		<div class="review-detail">
			<p class="paragraph is-italic">
				Farmear enemigos intentando que suelten un objeto con un 0.1% de probabilidad, hacer misiones insignificantes sin leer un solo diálogo o examinar un inventario con miles de objetos de utilidad dudosa son algunas de las acciones que todo jugador de MMORPG reconocerá al instante. 
				<br><br>
				Y es que el contenido de estos juegos está diseñado para jugarse durante cientas de horas, si no miles, debe funcionar tanto en solitario como en grupo, entre novatos y veteranos, progresivos a través de las tareas que elija el jugador entre una variedad de opciones y un abanico de lugares…
				<br><br>
				En definitiva, su diseño es muy complejo, y requiere de un equilibrio acertado entre complejidad y profundidad. Es por esto que frecuentemente encontramos sistemas fallidos, de complejidad excesiva o con curvas de aprendizaje tediosas... Pero eso sí, cualquier MMORPG capaz de superar estos obstáculos nos atrapará entre sus garras sumergiéndonos profundamente, como ningún otro género puede lograr.
				<br><br>
				New World, el reciente MMORPG de Amazon Games, fue concebido como una idea tremendamente ambiciosa: Un mundo persistente que se desarrollaría a través de la intervención simultánea de miles de jugadores batallando por sus territorios, construyendo ciudades, y contribuyendo a sistemas económicos. Con unos gráficos más que decentes y un apartado sonoro excelente, se lanzó al desafío de los MMORPGs.
				<br><br>
				<img src="assets/imgs/NW1.jpg">
				<br><br>
				Conformado únicamente por humanos, sin sistema de colas para actividades y con chat de voz por proximidad, New World estimula a sus jugadores a la interacción, ya que el destino de cada servidor se decide a raíz de la acción conjunta de los más de mil jugadores que hay vinculados a este. También nos otorga la opción de activar el modo PVP, para que podamos matar o morir en el intento de matar a todo el que se ponga en el camino de nuestro propósito.
				<br><br>
				Al contrario de lo que es frecuente, al iniciar el juego no fijamos una clase. Más bien y al igual que funciona en el mundo real iremos aprendiendo las artes de lo que practiquemos ya sea, por ejemplo, utilizar un arco, pescar o curtir cuero. En cualquier momento podemos decidir empezar a subir un arma diferente o modificar las habilidades de la misma. 
				<br><br>
				Por un lado, cada jugador evoluciona paulatinamente su personaje tanto en apariencia como en estadísticas, percibiendo sistemas simples y satisfactorios: Un entorno muy vivo donde todo es recolectable, un combate sencillo con pocas habilidades, enemigos con patrones de ataque reconocibles, misiones adornadas con pequeñas historias y objetivos simples como matar enemigos o recoger cofres, un sistema de crafting con materiales limitados esparcidos por todo el mapa y recetas intuitivas, la posibilidad de comprar o vender en un mercado... Siempre habrá varios objetivos individuales, desde la historia principal, que nos conduce por las mecánicas, el mapa y el lore; hasta proyectos del pueblo escogidos por los jugadores que lideran una ciudad, o misiones que aumentan la influencia de tu facción en cada territorio. Todos pensados para favorecer la reunión de jugadores tanto aliados como enemigos. 
				<br><br>
				Por otro lado, cada una de esas acciones contribuyen a un todo mucho mayor: el estado del mundo.
				<br><br>
				<img src="assets/imgs/NW2.png">
				<br><br>
				Aeternum es una isla de la que fluye un poder llamado Azoth que da la vida eterna, el cual aventureros de diferentes culturas acuden ambicionando. Sin embargo, la mayoría son consumidos por él y permanecen en la isla corruptos por el resto de la eternidad. Este no solo un lugar donde encontrarse humanos y animales de diferentes eras y regiones que mueren y renacen en un ciclo sin fin… También es donde, como ellos, embarcamos nuestra búsqueda del Azoth, esperando no sufrir su mismo destino.
				<br><br>
				El mundo se distribuye en varios territorios, cada uno gobernado por una de las tres diferentes facciones que resisten a la corrupción, conformadas por clanes. Toda la facción se beneficia de los territorios que posee y el clan que lo conquistó toma las decisiones sobre qué edificar, las tareas que otros jugadores deben realizar para llevar a cabo esas edificaciones y los impuestos por usarlas una vez construidas. Es decir, los jugadores pagan impuestos cada vez que realizan una transacción a través de su mercado, pagan semanalmente su vivienda en ese territorio o utilizan las estaciones de crafteo. Los impuestos hacen que, para atraer más viajeros, a diferentes ciudades les interesan distintas estaciones.
				<br><br>
				Los territorios, aparte de ser estéticamente interesantes, diferenciables y contener distintas culturas, son funcionalmente complementarios. Un territorio bueno para crear buenas armaduras, será malo para cocinar, para recolectar carbón o para subir experiencia. Ello hace que sea necesario viajar entre todos ellos constantemente. Además, nuestro personaje sube de nivel en cada territorio a medida realizamos funciones en ellos, como si los fuéramos conociendo. Con los niveles podemos especializar el territorio haciendo el coste de vivienda inferior, que otorgue más materiales, que no fallen tanto las mejoras… Sin embargo, cuanto más conocemos un territorio, más lento sube su nivel, por lo que es de gran utilidad conocer todos los territorios y especializar cada uno en algo distinto.
				<br><br>
				En New World deberemos viajar y viajar, ya sea para conseguir ese material de tier 1 que siguen pidiendo las recetas, ir a la batalla por la fortaleza de Ocaso, o fabricar un nuevo hacha en Primera Luz para talar más árboles. La forma más rápida de viajar entre territorios es a través del Azoth. que actúa como un teleport. Sin embargo, este es limitado y tendremos que gestionarlo, de manera que muchas veces deberemos caminar distancias medianas. Esto provoca frecuentes encuentros con facciones antagónicas, a menudo acabados en trifulcas. 
				<br><br>
				Los territorios son constantemente amenazados por los clanes de otras facciones, que pueden colaborar para incrementar la influencia de su facción en el territorio y declarar la guerra cuando ésta sea suficiente. Las guerras se producen a una hora concreta y en ellas luchan cincuenta jugadores del bando atacante contra cincuenta del defensor. También acecha el mal de Aeternum y a mayor tiempo de posesión de un territorio, más difícil será mantenerlo de las invasiones constantes. La pérdida de un territorio por invasión o conquista de jugadores supone perder parte de su progreso adquirido.
				<br><br>
				Y es en  las conquistas, trifulcas, o los meros enfrentamientos contra mobs donde sale a relucir uno de los puntos donde más brilla New World: el combate. Podremos blandir dos armas entre las que alternar con rapidez. Cada una con 3 habilidades escogidas entre las 6 posibles, con diferentes cooldowns que harán que debamos gestionarlas bien. Si queremos dominarlo, deberemos observar, esquivar y atacar en los momentos oportunos, para lo que ayudará conocer al enemigo, humano o corrupto.
				<br><br>
				<img src="assets/imgs/NW3.jpg">
				<br><br>
				New World es sencillo de entender y jugar, pero posee gran profundidad e implicaciones que van más allá del propio jugador. Los combates con otros jugadores son tensos, emocionantes; la pérdida de territorios, dolorosa: el chat se resiente como no había visto jamás. Cada servidor dispone de un mundo diferente; incluso a lo largo de los meses es perceptible la evolución de un mismo mundo. Sin duda, New World es y siempre será uno de los MMOs más memorables.	
			</p>
		</div>
  `,
	styles: [
	]
})
export class NewWorldDetailComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
