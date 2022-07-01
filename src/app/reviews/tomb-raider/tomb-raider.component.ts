import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomb-raider',
  template: `
    <img src="assets/imgs/TR/Header.jpg">
	<p class="title">Tomb Raider</p>
	<div class="review-detail">
		<div class="review-first-letter">
			C
		</div>
		<div class="review-intro">	
			onstantes momentos de supervivencia a situaciones extremas e irrealistas y una protagonista resistente a cualquier tipo y cantidad de heridas. Tomb Raider muestra una historia en la que Lara Croft logra resolver el misterio ancestral que aguarda en la isla que la retiene a ella y la tripulación con la que naufraga. 
			<br><br>
		</div>
		<div class="review-paragraph">
			Es una aventura lineal, repleta de animaciones de corta duración, momentos épicos de escalada con pico, saltos gigantes, tirolinas, cascadas, paracaídas y peleas sigilosas, de tiroteos, o cuerpo a cuerpo con el mismo pico. También contiene elementos de exploración opcionales como son sus tumbas, que esconden un tesoro tras un puzle; diversos desafíos de zona, como quemar banderas, recoger setas o destruir alarmas; y la recogida de reliquias y diarios con lore. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/TR/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			La protagonista lucha usando 4 armas que irá desbloqueando y mejorando a tu gusto usando los recursos que recoges del suelo y enemigos. El arco, sigiloso y de largo alcance; la escopeta, mucho daño a corto alcance; el fusil, con buen daño a corto y largo alcance, sin ser demasiado preciso; y la pistola, que por no tener una función definida se queda un poco atrás. También emplea las habilidades que vas asignando según tus preferencias, que le permiten combatir y recolectar con mayor facilidad.
			<br><br>
		</div>
		<div class="review-conclusion">
			Sin demasiadas sorpresas en la historia ni mecánicas, Tomb Raider es un juego que se hace entretenido y en el que viviremos situaciones clásicas de epicidad. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class TombRaiderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
