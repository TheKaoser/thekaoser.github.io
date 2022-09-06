import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nier-automata',
  template: `
    <img src="assets/imgs/NierAut/Header.jpg">
	<p class="title">Nier: Automata</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			l planeta tierra fue conquistado hace años por alienígenas que expandieron por el territorio múltiples máquinas. Los humanos se vieron obligados a viajar a la luna y crear androides llamados YoRHa con la misión de eliminar la amenaza terrestre.
			<br><br>
		</div>
		<div class="review-paragraph">
			Nier: Autómata nos pone en la piel de 2B, una carismática androide diseñada para aniquilar enemigos junto a un robot pequeño, POD, que va informando de la situación. Su evolución es enorme durante la aventura, sin permitirse inicialmente el mínimo desliz, y humanizándose poco a poco hasta adquirir su propia forma de pensar, salvar vidas inocentes y acabar enamorada de su compañero androide de seguridad 9s.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/NierAut/Park.jpg">
		<div class="review-paragraph">
			Al mismo tiempo, se descubre la peculiar forma de actuar de las máquinas contrarias, que se fabrican a sí mismas y empiezan a recrear comportamientos humanos, como hablar, sentir emociones, preguntarse el sentido de la vida, formar sistemas políticos, vivir en aldeas pacíficas o hacer sacrificios religiosos. Poco a poco, se descubre que ambos, humanos y alienígenas, murieron hace años y solo quedan las creaciones de ambas razas. Y lo más fuerte: los caminos de la humanidad se repiten de nuevo, esta vez en androides y robots. Cuando los androides averiguan que los humanos han muerto, pierden su motivo de vivir y comienzan a enfrentarse entre sí… 
			<br><br>
			La historia está narrada con tono melancólico cargada de sentimientos, espectacular música e intensos dilemas. Para entenderla al completo, hay que jugar varios finales que nos dan la perspectiva de diferentes personajes. Estas múltiples perspectivas también aparecen de forma más directa en cámaras que se alternan según la zona, para causar sensaciones o alterar las mecánicas del jugador.  
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/NierAut/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			A esta historia la acompañan varios aspectos que aportan credibilidad: al morir, se crea otro cuerpo diferente con una ranura de memoria de la última vez que guardamos partida; tenemos un límite de chips equipables con mejoras, que ocupan ram; entre los chips, algunos que muestran componentes de la interfaz gráfica, otros otorgan técnicas de ataque, defensa, curaciones o pirateo. También contribuyen los diálogos, ingeniosos para demostrar la consciencia de los robots sobre su propia existencia, la amistad o el amor a pesar de su programación.
			<br><br>
			El combate es rápido, con dos espadas futuristas flotantes que pueden combinarse con distintos tipos de ataque. El POD puede disparar simultáneamente y tiene una habilidad especial cada cierto tiempo. Después del primer final, controlamos al compañero de 2B, 9s, cuya habilidad principal es hackear al enemigo a través de un minijuego en el que debemos disparar y esquivar con una nave, lo cual es entretenido y diverso.
			<br><br>
		</div>
		<div class="review-conclusion">
			Los dilemas que se viven en esta aventura no dejan indiferente. Con personajes como 2B o 9s, que podemos ver más de cerca evolucionar y sufrir el mismo destino que el resto. Las perspectivas que ofrece de los hechos a través de otros personajes nos hacen entender mejor los motivos de cada uno y la jugabilidad tiene la variabilidad adecuada para hacerse llevadero durante todo el viaje.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class NierAutomataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
