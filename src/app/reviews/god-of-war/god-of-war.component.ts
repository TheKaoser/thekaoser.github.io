import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-god-of-war',
  template: `
    <img src="assets/imgs/GOW/Header.jpg">
	<p class="title">God of War</p>
	<div class="review-detail">
		<div class="review-first-letter">
			K
		</div>
		<div class="review-intro">	
			ratos talando un árbol con violencia derivada de un hecho pasado, a la vez que corrige a su hijo, todo ello bajo la sombra de una música desgarradora. El principio de God of War nos levanta montones de preguntas que se resolverán a través de una de las tramas más cuidadas con lugar en la mitología griega. 
			<br><br>
		</div>
		<div class="review-paragraph">
			Y es que no solo sus gráficos, animaciones y diálogos son brillantes y precisos. También lo son sus manejabilidad y mecánicas, que sin ser excesivamente innovadoras y desbloquearse demasiado rápido y sin demasiada consideración por parte del jugador, son cinemáticas y satisfactorias. Todo ello se pone en práctica durante esta travesía de Kratos hacia el monte más alto de los 6 reinos, para llevar ahí las cenizas de su fallecida esposa.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/GOW/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Le acompaña su hijo Atreus, con el que su relación madura a lo largo de la aventura. Por una parte, por la confianza que va depositando Kratos en él y, por otra, por el paulatino descubrimiento de Atreus de ser un dios y su posterior asimilación. Así, Kratos acaba relevando las atrocidades que cometió en el pasado y Atreus termina dándose cuenta de que no debe imitar sus pasos.
			<br><br>
			Sin embargo, esta no es la única relación que madura a lo largo del juego; nuestro enemigo Baldur, quien vive atormentado a causa de su inmortalidad, también persigue a su madre, quien le concedió dicha condición a cambio de la pérdida de sus sentidos. Nadie: hombres ni dioses, se salvan de dilemas y sufrimientos y God of War los trata a la perfección creando un drama de lo más creíble en el que congeniamos con cada uno de los 4 personajes y sus motivos.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/GOW/Cinematic.jpg">
		<div class="review-paragraph">
			<br>
			Otro punto a subrayar son los combates cinemáticos que aparecen de tanto en tanto. Escenas gustosas de ver y controlar en las que saltamos entre las escamas de un enorme dragón, lanzamos a Baldur contra aplicaciones de piedra o nos sujetamos a este mismo en la caída libre desde un gigante a la par que Atreus dispara su arco. Su integración con el gameplay es impecable y sirven como puente a la resolución de conflictos congruentes con la historia.
			<br><br>
		</div>
		<div class="review-conclusion">
			En definitiva, God of War trata a personajes con tragedias previas sin resolver de manera excelente y con una jugabilidad aceptable y entretenida que es capaz de resolver dichas tragedias con epicidad y veracidad.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class GodOfWarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
