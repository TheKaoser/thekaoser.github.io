import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frostpunk',
  template: `
    <div class="splashart">
      <img src="assets/imgs/Frostpunk/Header.jpg">
    </div>
    <p class="title">Frostpunk</p>
    <div class="review-detail">
      <div class="review-first-letter">
        L
      </div>
      <div class="review-intro">	
        a mezcla entre tensión y estrategia tiene mucho potencial. Frostpunk así nos lo demuestra, con su estilo desolador e incitación a la supervivencia de nuestro pueblo sin importar los medios. Su historia contra la propia máquina nos hará sentir las penurias que sufrirían los gobernantes más desafortunados.
        <br><br>
      </div>
      <div class="review-paragraph">
        En concreto, en una era glaciar donde todo está nevado y las temperaturas descienden trágicamente, eres el responsable de mantener a flote una pequeña civilización alrededor de una enorme caldera de combustión. Es decir, como en otros juegos de estrategia en tiempo real, tú decides qué edificar y en qué orden, gestionando los recursos que se proporcionan: madera, carbón y metal; pero aquí el enemigo no son otros humanos, si no la propia naturaleza.
        <br><br>
        Frostpunk se mete en las relaciones humanas. El conjunto de ciudadanos disponen de un estado general de empatía con tus acciones inmediatas simbolizado con la barra de descontento que hay que evitar llegue al extremo. Por el contrario, la barra de esperanza, más relacionada con las acciones a largo plazo, habrá que intentar que baje al mínimo. Pero va incluso más allá. Cada uno dispone de nombre, vivienda y puesto de trabajo concreto, se reproduce y tiene sus momentos de descanso. Cuando enferma, falta al trabajo y si es amputado o muerto, ha de ser sustituido.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/Frostpunk/Gameplay.jpg">
      <div class="review-paragraph">
        <br>
        Nuestra función consiste en hacer que la ciudad prospere y por ello tendremos que responder ante eventos. Temperaturas que bajan en lugares de trabajo y viviendas haciendo que la población enferme si no ponemos remedio, revueltas de algunos ciudadanos que esperan cambios a los que podemos hacer caso o ignorar, nuevos habitantes que llegan esperando refugio… Como gobernante, debemos decidir qué peticiones aceptar, cuando ejecutar a los responsables de una rebelión y cuando hacer que la gente duerma bajo cero.
        <br><br>
        Lo mejor es cómo gestiona sus curvas de tensión. Cuando crees que está todo controlado, llegan noticias de algo terrible que gestionar siempre renunciando a una cosa u otra. A veces, habrá que tomar medidas como hacer que la gente trabaje fuera de horas, crear cárceles para encerrar a presos o alzar iglesias y pubs. Algunas funciones y edificios están bloqueados tras leyes e investigaciones, que se pueden ir imponiendo e investigando con un tiempo de enfriamiento.
        <br><br>
      </div>
      <div class="review-conclusion">
        En resumen, Frostpunk es un juego de historia completamente diferente, en el que tendrás que tomar decisiones difíciles y ver a cientas de personas sufrir y alzarse contra tí, aún cuando el frío no deja de imponerse. ¿Serás capaz del desafío?
      </div>
    </div>
  `,
  styles: [
  ]
})
export class FrostpunkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
