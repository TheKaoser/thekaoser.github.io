import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xcom2',
  template: `
    <img src="assets/imgs/XCOM2/Header.jpg">
    <p class="title">XCOM 2</p>
    <div class="review-detail">
      <div class="review-first-letter">
        A
      </div>
      <div class="review-intro">	
        ño 2035, la Tierra es controlada por los ADVENT, un grupo de alienígenas invasores. Nuestra misión como comandante de la nave Avenger es oponernos a su gobierno totalitario y opresor. Lo haremos reclutando soldados, investigando al enemigo y viajando por el planeta resolviendo amenazas y encontrando nuevos aliados. Abróchate el cinturón que este juego es denso.
        <br><br>
      </div>
      <div class="review-paragraph">
        Sesenta y cinco horas de juego y un obligado reinicio tras perder la primera partida. Eso es lo que he necesitado para comprender al fín los abundantes misterios que guarda XCOM 2. Y es que la explicación sobre las mecánicas del juego es limitada. El coste de las habilidades, algo de suma importancia en sus combates por turnos, se conoce a través de la memorización. La presentación de nuevos enemigos no detalla sus mecánicas, que habrá que descubrir experimentándolas en nuestras carnes. Todo esto añade dificultad, tensión y requiere del jugador facultades adicionales, que desvían la atención de lo principal. 
        <br><br>
        Nuestras tareas se dividen, pues, en gestionar por un lado las instalaciones del Avenger, decidiendo si edificar centros para entrenar soldados, curarlos, comunicarnos con más territorios o adquirir la capacidad de construir más instalaciones. Parejamente, se desarrolla un árbol de investigaciones en el orden elegido, que abren puertas a construir nuevas armas, armaduras y objetos para los soldados, a construir nuevas instalaciones dentro del Avenger y a más objetivos de la trama principal, la cual debemos completar en un momento u otro para terminar con la invasión. 
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/XCOM2/Avenger.jpg">
      <div class="review-paragraph">
        <br>
        Finalmente, y quizá más importantemente, están las misiones. El mapa del mundo es volátil y tiende al desastre. Cada vez aparecen más eventos malignos entre los que hay que elegir según sus consecuencias negativas y recompensas. También aparecen zonas de farmeo de recursos que requieren pasar ciertos días sobre dicho recurso. Para colmo, los enemigos son más poderosos cada semana y los elegidos, tres enemigos introducidos en un DLC, aprenden nuevas técnicas. Entre tantos eventos resulta complicado encontrar ocasiones de calma para avanzar con la misión principal, pero es necesario.
        <br><br>
        Por suerte, las investigaciones, progreso de las construcciones y curación de nuestros soldados después de una misión en la que resulten heridos también se benefician del paso del tiempo, por lo que hay que calibrar cuándo compensa hacer pasar el tiempo contactando con una nueva región o farmeando algún recurso.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/XCOM2/Soldier.jpg">
      <div class="review-paragraph">
        <br>
        Los soldados que entrenamos van aumentando su rango a la par que desbloquean nuevas habilidades de nuestra elección según su clase. Pueden ser especialistas, para apoyar con curaciones y hackeos a estructuras y robots; comandos, preparados para correr, con escopeta y espada; tiradores, que disparan con precisión desde largas distancias; granaderos, listos para hacer volar por los aires cualquier edificio y reducir la armadura de los enemigos con sus balas penetrantes; o agentes psi, para añadir estados negativos a los enemigos e, incluso, controlarlos. Además, nos apoyan 3 facciones con sus propios soldados característicos: guerrilleros, con mucha movilidad gracias a sus ganchos y capacidad de reacción ante situaciones; segadores, francotiradores que se mantienen ocultos si actúan con precaución; y templarios, que van aumentando su nivel de concentración para potenciar sus habilidades de control.
        <br><br>
        El combate se desarrolla por turnos en los que se pueden realizar dos acciones por soldado y enemigo. Los mapas tienen diferentes alturas y obstáculos que se pueden utilizar como barrera o para no ser visto. Normalmente, conviene no alertar a varios pelotones enemigos y acabar con uno antes de comenzar con el siguiente. 
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/XCOM2/Gameplay.jpg">
      <div class="review-paragraph">
        <br>
        Los enemigos también son variados y hay que combinar distintas estrategias para derrotarlos. Los perdidos son numerosos y predecibles, ya que atacan cuerpo a cuerpo. Además otorgan una acción adicional a quien los derrota. Hay otros enemigos que pueden controlar mentalmente a nuestros soldados, dejarlos incapacitados o estrangulados, dar escudos a los suyos o revivirlos; incluso lanzarse al aire e invocar rayos que golpean varias localizaciones el turno siguiente.
        <br><br>
        Todo en el juego es pseudo aleatorio, lo cual agrega rejugabilidad y tensión. Desde los días que tardamos en contactar con una nueva región para generar más ingresos pasivos y acceder a nuevos objetivos, hasta las probabilidades de acierto al disparar a un enemigo, que se pueden aumentar acercándose al enemigo o flanqueando la cobertura tras la que se esconden. Incluso los escenarios de los niveles se disponen al azar junto a sus objetivos.
        <br><br>
      </div>
      <div class="review-conclusion">
        XCOM 2 es muy amplio. Sin embargo, es coherente entre sistemas y consigue intrigar tanto en sus misiones como en su gestión del Avenger. Puede que algunos usuarios se sientan apabullados ante la falta de información al principio. Lo que se garantiza es que, tras unas horas, estarán contentos de haberse quedado. 
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Xcom2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
