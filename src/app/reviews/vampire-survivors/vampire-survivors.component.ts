import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vampire-survivors',
  template: `
    <img src="assets/imgs/VS/Header.jpg">
    <p class="title">Vampire Survivors</p>
    <div class="review-detail">
      <div class="review-first-letter">
        I
      </div>
      <div class="review-intro">	
        magina un juego en el que tu única interacción es mover el personaje y seleccionar cada cierto tiempo las herramientas con las que va a combatir de manera automática. 
        <br><br>
      </div>
      <div class="review-paragraph">
        Deja de imaginar. Vampire Survivors, esencialmente, es eso en forma de roguelike. Cada partida comienza en un mapa y con un personaje de tu elección. Dichas decisiones cambian ligeramente la forma de jugar, por cómo aparecen y de qué tipo son los enemigos y cuál es el objetivo: aguantar x minutos, llegar a y reliquia o matar z jefe.
        <br><br>
        El personaje va subiendo de nivel al recoger las gemas que dejan los enemigos al morir. Con el nivel adquiere nuevas habilidades como efectos en área, proyectiles o protecciones que en sucesivos niveles pueden seguir mejorando. Al escoger una habilidad, se renuncia a otras, ya que hay un límite. Al llevarlos al nivel máximo pueden ser combinados con otras habilidades concretas para formar una evolución más poderosa. 
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/VS/Gameplay.png">
      <div class="review-paragraph">
        <br>
        Como en todo roguelike que se precie, cada partida genera beneficios para las sucesivas partidas. En este caso, los beneficios son aumentos generales para los personajes, nuevos personajes y nuevos mapas. 
        <br><br>
        Por suerte, las investigaciones, progreso de las construcciones y curación de nuestros soldados después de una misión en la que resulten heridos también se benefician del paso del tiempo, por lo que hay que calibrar cuándo compensa hacer pasar el tiempo contactando con una nueva región o farmeando algún recurso.
        <br><br>
      </div>
      <div class="review-conclusion">
        Vampire Survivors es un juego entretenido y sencillo. A pesar de no tener gran profundidad ni mecánicas, es tremendamente adictivo y satisfactorio.
      </div>
    </div>
  `,
  styles: [
  ]
})
export class VampireSurvivorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
