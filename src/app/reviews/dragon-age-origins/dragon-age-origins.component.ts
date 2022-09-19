import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon-age-origins',
  template: `
    <img src="assets/imgs/DAO/Header.jpg">
    <p class="title">Dragon Age: Origins</p>	
    <div class="review-detail">
      <div class="review-first-letter">
        D
      </div>
      <div class="review-intro">	
        ragon Age: Origins permite formar los grupos más extravagantes de una forma orgánica y natural cuyos integrantes tienen diversas circunstancias que les hacen unirse a la causa de nuestro guarda gris… o al menos temporalmente. De la misma forma, pueden abandonarla si no les convencen nuestras decisiones. 
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/DAO/Cinematic.jpg">
      <div class="review-paragraph">
        <br>
        Es este variante grupo de 4 miembros el que intenta (y acaba consiguiendo) derrotar al mal: los engendros tenebrosos, y a su líder, el archidemonio. Para ello, viajan y realizan favores a las distintas facciones: enanos, elfos, magos y hombres, para que luchen a su lado. A pesar de ser un argumento hasta cierto punto genérico, contiene cierta originalidad en algunas de sus tramas y encontramos momentos que transmiten emociones a través de los magníficos doblajes.
        <br><br>
        Las conversaciones incluyen interesantes dilemas acerca de la religión y las diversas corrientes, la justificación del fin a través de los medios, como salvándose a través de la magia de sangre, cuyo efecto secundario es el sacrificio o el alcanzar la felicidad a través de la posesión en lugar de por medios naturales. Del mismo modo, se critica cómo los humanos viven encerrados, rodeados de ruido, frente a los elfos que en la naturaleza hayan espacio y serenidad.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/DAO/Morrigan.jpg">
      <div class="review-paragraph">
        <br>
        Todos los personajes evolucionan durante la historia en función de tus decisiones, incluso aquellos que decidimos dejar en el banquillo, es decir, el campamento. Sin embargo, si se ven muy contrariados pueden abandonarte. Leliana es religiosa y respeta unas cenizas ancestrales capaces de sanar enfermedades; si decides profanarlas para salvar a quien no lo merece no lo soportará. O Sten, quien es capaz de retarte para comprobar que eres suficientemente fuerte cuando te desvías del objetivo principal. Por contraposición, si se sienten cómodos a tu lado, te hacen favores, son más amables e incluso podrán tener relaciones amorosas contigo. ¿Quién no querría salir con una bruja ponzoñosa como Morrigan?
        <br><br>
        A parte de tus acompañantes, el resto del mundo también se altera con tus decisiones. Si te unes a una secta, o la destruyes; si salvas a una persona de la muerte o la dejas encerrada; si das más o menos información… Ello va definiendo tus relaciones con el mundo, que a su vez interactúa entre sí y cuyas consecuencias pueden percibirse a largo plazo.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/DAO/World.jpg">
      <div class="review-paragraph">
        <br>
        El mundo es casi abierto. Para viajar entre zonas no hay áreas vacías si no que el viaje se ve simplificado y solo se detiene al llegar al destino o al encontrar un evento. De este modo siempre llegamos a lugares interesantes y que aportan a la historia. El mismo evento no se repite y se relaciona con el camino que transitas y el momento de la historia. Así, encontramos arañas cerca del bosque o al asesino que el traidor Loghain envía a darte caza si nos acercamos a su castillo.
        <br><br>
        Como cabe esperar, hay continuos enfrentamientos. La mecánica principal consiste en pausar el combate para seleccionar las acciones a seguir de cada miembro. Por defecto, atacan con sus propios criterios determinados por las tácticas. Estas son reglas que se pueden editar e incluyen pero no se limitan a echar cierta habilidad al ver un tipo de enemigo o desactivar un efecto al llegar a un porcentaje de vida.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/DAO/Combat.jpg">
      <div class="review-paragraph">
        <br>
        En general hay muchas habilidades disponibles. Muchas de ellas no se diferencian demasiado entre sí y, sin embargo, agregan amplitud a la curva de aprendizaje ya alta por tener que recordar al menos 4 conjuntos de estas. Entre las más interesantes se hayan habilidades que dependen de la posición del personaje, como el ataque que golpea con dos armas a tantos enemigos como haya o el cono de la magia eléctrica, que puede realizar daño amigo; otras que atraen a los enemigos contra uno mismo para evitar que dañen al resto del equipo, o que reducen la vida propia paulatinamente a cambio de daño; y finalmente hay habilidades de curación, para mantener el grupo con vida. Como es de deducir, cada miembro se debe especializar en una función, para tener el grupo más compensado y óptimo posible. 
        <br><br>
        El sistema de guardado es prácticamente manual y lo podemos utilizar siempre que no estemos en combate. Desgraciadamente, las decisiones pierden importancia cuando puedes volver atrás, y es frustrante tener que guardar partida tras cada combate para no tener que repetir contenido. 
        <br><br>
      </div>
      <div class="review-conclusion">
        Dragon Age: Origins es un juego muy completo. Posee una historia con varias bifurcaciones, personajes con doblajes y personalidades únicos y un combate estratégico con múltiples opciones. Para ser tan enorme, hace todo muy aceptablemente y conforma una experiencia muy disfrutable. 
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DragonAgeOriginsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
