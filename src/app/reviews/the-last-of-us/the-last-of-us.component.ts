import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-last-of-us',
  template: `
    <img src="assets/imgs/TLOU/Header.jpg">
	<p class="title">The Last of Us</p>
	<div class="review-detail">
		<div class="review-first-letter">
			U
		</div>
		<div class="review-intro">	
			na infección que se transmite por mordisco convirtiendo en agresivo y destruyendo paulatinamente a quien la posee ha acabado con el mundo conocido. La única esperanza es una niña huérfana incapaz de sufrir transformación llamada Ellie. Este es el escenario en el que se desarrolla The Last of Us.
			<br><br>
		</div>
		<div class="review-paragraph">
			El protagonista, Joel, es un padre que perdió a su hija hace 20 años y que desde entonces se dedica al contrabandismo. Uno de sus trabajos consiste en llevar a la misteriosa Ellie ante los Luciérnaga quienes podrían investigar su extraordinario caso. Pero el camino está lleno de infectados y bandidos, así como algunos aliados como su hermano Tommy u otros contrabandistas. 
			<br><br>
			Tras una cuidada evolución, Ellie va reemplazando el vacío que dejó su hija y le hace tomar la controvérsica decisión de engañar a la chica para salvarla de la finalmente mortal investigación de los Luciérnagas, denegando así el hallazgo de una cura para el resto de la humanidad.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/TLOU/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Es un juego corto que cuida los detalles meticulosamente. El entorno cuenta historias que ayudan a comprender la situación general, hay numerosas animaciones para distintos estados del personaje y las conversaciones entre los personajes son ingeniosas y se adaptan al gameplay. Sin embargo, el realismo compite a veces con la fluidez o el balance. Para cambiar de arma debes sacar la mochila con su respectiva animación y solo sobre superficies estables. Algunas mecánicas requieren menos habilidad que otras con el mismo efecto como esperar a contraatacar para matar de un golpe o lanzar botellas apuntadas automáticamente dejando al rival en un estado en el que se pueden ejecutar con un botón. Otros ejemplos son la redundancia de objetos con el mismo efecto como botellas y ladrillos, y la inutilidad de bombas de humo o el aumento de la mejora de velocidad de fabricación.
			<br><br>
		</div>
		<div class="review-conclusion">
			A pesar de sus desbalances jugables y su historia ambientada en un entorno popular, el desarrollo de los personajes es admirable y consistente a través de los hechos que viven.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class TheLastOfUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
