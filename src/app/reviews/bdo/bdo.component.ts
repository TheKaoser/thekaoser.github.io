import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdo',
  template: `
    <div class="splashart">
    	<img src="assets/imgs/BDO/Header.jpg">
	</div>
	<p class="title">Black Desert Online</p>
	<div class="review-detail">
		<div class="review-first-letter">
			U
		</div>
		<div class="review-intro">	
			n mundo enorme, cargado de jugadores e historias, en el que puedes realizar múltiples actividades, desarrollar profesiones, diseñar tu equipo y nunca dejar de progresar en numerosos frentes simultáneamente y con diferentes personajes. Black Desert Online es posiblemente el juego más grande y complejo al que he jugado y, aunque me ha costado entender el percal, no me ha dejado indiferente.
			<br><br>
		</div>
		<div class="review-paragraph">
			Empieza, como otros muchos, eligiendo entre los múltiples personajes. Cada uno con 2 sets de habilidades muy diferentes: sucesión y despertar, entre los que se puede cambiar fuera de combate por lo que, incluso un mismo personaje, puede utilizarse de distintas formas. Todos llevan tres armas equipadas y utilizan dos de ellas según el set, puesto que la secundaria siempre permanece activa.  
			<br><br>
			Desde el inicio, se nos presenta al espíritu negro, un personaje entrañable que nos acompañará constantemente aconsejándonos y temáticamente proveyendo nuestro poder. Estamos en un mapa colosal lleno de regiones: Velia, Calpheon, Valencia, Kamasilva, Odylita, etc. las cuales se van descubriendo paulatinamente. Moverse entre ellas es lento, con travesías a caballo que alcanzan los 20 minutos. O considerablemente más largas andando, en caso de no tener acceso a un establo. Esto crea aún mayor sensación de inmensidad. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/BDO/Character.png">
		<div class="review-paragraph">
			<br>
			El mapa dispone de variedad de entornos, criaturas y misiones que fomentan su exploración. Descubriremos lugares para que aparezcan en el mapa, hablaremos con NPCs para conocer su ocupación y mataremos criaturas para poder ver su barra de vida, mejorar nuestro daño y defensa contra ellas, y el botín que sueltan sucesivamente. Todo ello proporciona puntos de conocimiento: un tope que limita el máximo de energía que puede tener un personaje. Los personajes de una cuenta (o familia) comparten su conocimiento, pero su energía es independiente y se recarga con el tiempo. Esta se puede canjear por fórmulas o recetas, buffos temporales o trabajar en alguna profesión (más adelante explicaré qué significa esto). En otras palabras, el incentivo para explorar es innovador, recompensante y entretenido.
			<br><br>
			Además, se puede explorar y matar en grupos de hasta 5. La experiencia recibida y botines son menores por miembro, pero, como se comparten las hazañas del resto de miembros, puede ser una opción recomendable si se matan lo suficientemente rápido y dentro del radar del grupo. Está sabiamente pensado para ser jugado en grupo o solitario, sin dar excesiva ventaja a uno de los bandos. De todos modos, a veces, jugadores poderosos suben de nivel a otros menos poderosos con este sistema. Lo llamado leechear.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/BDO/Group.jpg">
		<div class="review-paragraph">
			<br>
			No todas las interacciones entre jugadores son amigables, por fortuna. Mi adorado PVP siempre está activo, aunque morir contra un jugador no conlleva ninguna pérdida salvo la posición. En servidores normales, agredir a otros reducirá la reputación, lo que hará que el resto no pierdan la suya al matarte y que puedas perder experiencia y cristales (explicados más adelante) si eso ocurre. En el resto de servidores, las criaturas otorgan mayor cantidad de drops, pero no se penaliza a los agresores de ninguna manera.
			<br><br>
			Hay multitud de tareas a parte de exterminar enemigos, como son pescar, sembrar, recoger leña o miel, cazar, ordeñar, cocinar, elaborar, filtrar agua, domar caballos, etc. Normalmente las profesiones se desempeñan con el objetivo de conseguir dinero vendiendo el producto obtenido a NPCs o en el mercado. Al final, son distintas apariencias para resultados similares y esta elección es algo a agradecer. El dinero recabado se puede usar, por ejemplo, para comprar equipamiento a otros jugadores del nivel deseado. Hay quien suele dedicar un personaje a cierta profesión, de manera que ya está ubicado en la zona donde se desempeña.
			<br><br>
			Pero la cosa no acaba aquí. El mapa está lleno de nodos en los que podemos invertir para poder comprar viviendas, comerciar o fabricar objetos en dicho nodo. Lo mejor es que podemos contratar trabajadores, darles una vivienda, y hacer que viajen entre nodos vendiendo lo que han adquirido de forma automática. Es una forma secundaria, más lenta, de obtener ingresos pasivos.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/BDO/Fishing.jpg">
		<div class="review-paragraph">
			<br>
			La configuración de nuestro personaje es extensa. El nivel determina las habilidades disponibles y los puntos de habilidad sirven para adquirirlas o potenciarlas. Ambas cosas aumentan conforme se grindean enemigos (y existen multitud de objetos que potencian su obtención) o se pierden al morir contra estos. El nivel sube de manera factible hasta el 60 y lentísima a partir de este, siendo las últimas habilidades prácticamente inalcanzables. La parte buena es que nunca se pierde la sensación de progresión. 
			<br><br>
			Otras estadísticas que se van subiendo son el aliento, que aumenta al correr y permite hacerlo durante más tiempo; la fuerza, que se sube cargando objetos pesados y permite cargar más peso en el inventario (aunque los espacios son limitados); y la vida máxima, que se sube al consumir alimentos y pociones. Quizá no sea obvio a simple vista, pero esto permite el farmeo AFK, que puede convertir al jugador en dependiente, puesto que supone que el juego debe permanecer constantemente abierto para ser igual de eficiente que el resto. No soy muy partidario de este tipo de favorecimientos. El nivel también se puede subir muy lentamente sin estar presente a través de entrenamientos contra maniquies que hay en las ciudades. 
			<br><br>
		</div>
		<img class="review-image-left" src="assets/imgs/BDO/Inventory.jpeg">
		<div class="review-paragraph">
			El equipamiento consta de varias partes. Las que aumentan la defensa (o dp): casco, armadura, guantes y botas; las que aumentan el ataque (o ap): arma principal, secundaria y de despertar; y las partes que complementan ligeramente cualquiera de ambas: 2 anillos, 2 pendientes, un collar y un cinturón. También una piedra de alquimia, que puede activarse para otorgar un bonificador temporal. A la suma de los ap y dp se le llama gs (gearscore) y es lo que determina tu poder. Todos los esfuerzos, en su raíz, sirven para aumentar este numerito. A niveles altos, 1 gs es muy costoso de obtener y puede valer miles de millones de monedas, es decir, cientas de horas de juego. Cada pieza puede otorgar otras habilidades pasivas (precisión, daño desde la espalda o daño a objetivos en el suelo), que se añaden a través de cristales usando las ranuras disponibles y tienen la posibilidad de romperse al morir. Una decisión arriesgada, para mi gusto acertada, que, junto con la pérdida de experiencia, le da peso a la muerte.
			<br><br>
			También se pueden tener otras mascotas; hasta 5, que recogen los drops automáticamente. Y un hada, que activa habilidades automáticamente, por ejemplo consumir pociones de vida cuando llegas a cierto porcentaje. Esto combina muy bien con una poción que contiene ilimitados usos y que se puede fabricar farmeando.
			<br><br>
			En ciertos horarios aparecen jefes que requieren a varios jugadores, capaces de otorgar poderosos botines con solo participar: los mejores equipamientos del juego, piedras alquímicas, ranuras de cristales para equipo, etc. Vell, por ejemplo, es un jefe marino al que se llega en barco (sí, también hay barcos) y se aniquila con sus cañones. También hay jefes individuales que se pueden matar una vez a la semana. Sin embargo, al aparecer tienen atributos muy poderosos que van rebajándose con el paso de los días. Por tanto hay que encontrar el balance entre matarlos de manera asequible y que el reset se produzca lo antes posible para poder obtener el botín cuanto antes otra vez. Un concepto de lo más interesante, si se tiene en cuenta que la derrota puede producir terribles consecuencias.
			<br><br>
		</div>
		<img class="review-image-right" src="assets/imgs/BDO/Upgrade.png">
		<div class="review-paragraph">
			La mejora de equipo es uno de los pilares fundamentales, y sirve para aumentar su daño, defensa u otros atributos. Hay veinte niveles de mejora: +1, +2, … +15 precedidos de PRI, DUO, TRI, TET y PEN. Al mejorar un equipamiento se corre el riesgo de fallar, perdiendo parte de su durabilidad máxima, lo que supone que haya que repararlo con más frecuencia desde el herrero. Para reparar del todo la durabilidad máxima de un equipamiento se necesitarán hasta 10 copias del mismo. A partir de DUO, el fallo supondrá, además, la bajada del nivel de mejora al nivel anterior. La probabilidad de que el equipamiento aumente es menor a mayor nivel, y mayor cuantas más veces se haya fallado previamente. Lo que le da la gracia es que se pueden hacer fallos a través de equipos baratos y, usar esos fallos para mejorar equipamiento valioso. Hay sistemas para guardar los fallos y poderlos emplear en el momento deseado, de manera que es un juego de pseudo azar combinado con estrategia. A partir de PEN, los objetos se pueden mejorar aún más con piedras llamadas Caphranitas, de altísimo valor.
			<br><br>
			Por si todo esto suena apabullante, el juego cuenta con una solución. Hay diferentes temporadas, que coinciden con la incorporación de nuevos personajes. Cada jugador puede crear un nuevo personaje de temporada, al que se le facilita el proceso. La experiencia aumenta más rápido y se consigue un equipamiento bastante razonable: el de Naru, que más tarde se puede intercambiar por el de Tuvala. Este será equivalente a un equipamiento de jefe, muy competente, pero a la larga inservible. Una pieza, de hecho, se podrá intercambiar por una de jefe PEN al final de la temporada por lo que es recomendable crear un nuevo personaje en cada temporada para obtener dicha recompensa. Además de ser buena manera de introducir a nuevos jugadores a las mecánicas básicas dándoles un poder inicial considerable, sin humillar a los veteranos, también es buena herramienta para aumentar la línea de personajes de antiguos jugadores con el incentivo de tener uno nuevo que probar y poderlo usar su energía posteriormente, por ejemplo en profesiones.
			<br><br>
		</div>
		<div class="review-conclusion">
			Black Desert Online es un come-vidas. Un juego ideado para realizar multitud de tareas con largos períodos de desempeño, de forma que siempre estés ocupado, incluso cuando no puedes estar. Si eres de los que se apegan a un solo videojuego, puede que este sea el ideal. Sus actividades son diversas y pulidas, su combate es fabuloso, y dispone de importantes interacciones con otros jugadores, que te mantendrán a gusto. Eso sí, tómalo con calma, o probablemente acabes frustrado.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class BdoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
