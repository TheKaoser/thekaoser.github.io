import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollow-knight',
  template: `
    <img src="assets/imgs/HK/Header.jpg">
	<p class="title">Hollow Knight</p>
	<div class="review-detail">
		<div class="review-first-letter">
			H
		</div>
		<div class="review-intro">	
			allownest es un submundo desolado repleto de insectos. Mantis bajo una jerarquía social, abejas obreras creadoras de panales o ciempiés resguardando los túneles más oscuros, todos próximos al fin más terrible.
			<br><br>
		</div>
		<div class="review-paragraph">
			Hollow Knight dispone un escenario de lo más original y variado que se recorre en lateral superando los distintos obstáculos que bloquean nuevas zonas con la adquisición de mecánicas concretas. Tiene fuertes influencias del género souls el cual da forma a su combate: llevarlo al 2D reduce el número de posibles reacciones, lo que lo convierte en preciso y realza la necesaria progresión para superar los combates ascendentemente arduos. Los enemigos ceden una serie de almas al morir que sirven como moneda y estas se materializan al morir en un fantasma que aguarda a ser derrotado.
			<br><br>
			Nuestras herramientas de transporte y combate incluyen deslizamientos laterales, agarre a la pared, un proyectil o un salto con impacto hacia abajo. Algunos de ellos consumen una energía que se recupera al matar enemigos; energía que también puede usarse para restablecer la salud. Un compromiso de lo más interesante.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/HK/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Como en los souls, el argumento es oscuro y no narrado. A través del mapa hallamos el motivo de la caída del reino: El Destello creó un virus para poseer todas las criaturas de Hallownest, ante lo cual el rey intentó crear una criatura hueca que pudiera albergar la infección y ser sellada con la fuerza de los soñadores. Sí, encarnamos uno de los múltiples intentos fallidos de la creación de dicha cáscara.
			<br><br>
		</div>
		<div class="review-conclusion">
			Hollow Knight es mecánicamente impecable debido a sus acotadas y medidas reacciones ante golpes enemigos. Su historia alberga secretos escalofriantes y profundos acompañados de un reto constante y satisfactorio. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class HollowKnightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
