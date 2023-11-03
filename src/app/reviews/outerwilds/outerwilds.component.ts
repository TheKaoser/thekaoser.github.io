import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outerwilds',
  template: `
    <div class="splashart">
      <img src="assets/imgs/OuterWilds/Header.jpg">
    </div>
    <p class="title">Outer Wilds</p>
    <div class="review-detail">
      <div class="review-first-letter">
        O
      </div>
      <div class="review-intro">	
        uter Wilds es un juego de exploración espacial en el que el jugador reconstruye poco a poco, surcando una galaxia ficticia en su nave espacial, quienes eran los Nomai y cuál ha sido su influencia sobre dicha galaxia. Influencia que, lamentable y repentinamente, lleva a la explosión de su sol.
        <br><br>
      </div>
      <div class="review-paragraph">
        En concreto, esta explosión ocurre a los 22 minutos de juego, por lo que tenemos un periodo de tiempo suficiente para desentrañar algunos de los secretos del universo y de estos Nomai. Después, salen los créditos y nos quedamos con las ganas de más.
        <br><br>
        Te lo has tragado. Después, volvemos al principio y nadie salvo nosotros recuerda nada. Todo sigue igual, excepto el conocimiento del jugador. Estamos encerrados en un bucle del que podríamos salir a la primera si tuviéramos las respuestas. Como consecuencia, el juego renuncia completamente a rejugabilidad a cambio una primera impresión al ritmo del jugador, intrigante y libre. Una renuncia que se ve compensada con creces por la pura exploración de un paraje desolador como es el espacio infinito y solitario.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/OuterWilds/Exploration.jpg">
      <div class="review-paragraph">
        <br>
        Cada planeta tiene características únicas. Uno congelado se descongela al pasar cerca del sol mostrando un acceso a su hueco interior, otro recubierto de espinas y plantas carnívoras gigantes, un tercero desértico cuya arena se traspasa a su planeta vecino a través de un huracán... Algunos están bloqueados por conocimientos ocultos en diferentes lugares. Así, descender al núcleo del Abismo del Gigante requiere saber que hay que entrar en el interior de las peligrosas medusas eléctricas para que nos lleven, o para poder aterrizar en la intermitentemente presente Luna Cuántica hay que saber que es necesario fijarla con una fotografía.
        <br><br>
        Ir descubriendo las propiedades de estos planetas es apasionante y satisfactorio. Las preguntas que suscitan la primera vez que los vislumbras van desapareciendo progresivamente de forma orgánica (en la mayoría de casos) a la par que su influencia en la historia de los Nomai. 
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/OuterWilds/Text.jpg">
      <div class="review-paragraph">
        <br>
        El problema principal del juego es la forma de contar los hechos, que es principalmente texto. A pesar de ser un recurso digno que creo sigue teniendo cabida en el videojuego actual, su abuso también puede conducir a la pérdida de interés. Periódicamente te hallarás buscando líneas con forma de caracol para saber que se trata de una ubicación importante y donde empezar a prestar atención y sacar las gafas de lectura. Por supuesto, van respaldadas de escenarios que respaldan de un modo u otro los textos, pero ¿y si no hubiera texto y el escenario fuera completamente autoexplicativo?
        <br><br>
        Probablemente no estemos preparados para experimentar un juego como Outer Wilds sin texto. El meta juego actual consiste en cruzar escenarios sin pararse a contemplar. Dedicar más de dos segundos a mirar alrededor resulta inconcebible cuando probablemente haya muchos como ese por explorar. En conclusión, crear escenarios que retengan al jugador a través de elementos no lingüísticos es extremadamente complejo, pero sigo pensando que sería posible. Ya el público de Outer Wilds conforma de por sí un nicho más observador y paciente de lo habitual. 
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/OuterWilds/Rest.jpg">
      <div class="review-paragraph">
        <br>
        A pesar de la crítica que hago precisamente porque el juego hace merecer dicha reflexión, se hace llevadero y logra despertar nuestro interés por el mundo. Tenemos un diario donde se van guardando e interrelacionando los textos que leemos para no tener que recordar todo. Conducir la nave es placentero así como mandar una sonda con la capacidad de fotografiar o gestionar el gas que nos queda en el traje para desplazarnos en gravedad cero al salir de la nave. 
        <br><br>
      </div>
      <div class="review-conclusion">
        Outer Wilds es un juego muy libre en el que somos únicamente influenciados por pistas aisladas para determinar nuestro siguiente destino de exploración. Continuamente nos vemos viajando a un planeta del que no sabemos absolutamente nada con la esperanza de obtener algún secreto nuevo. Aunque el medio de difusión no es el más emocionante, merece un reconocimiento en la industria por su innovación.
      </div>
    </div>
  `,
  styles: [
  ]
})
export class OuterwildsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
