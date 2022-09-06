import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-life-alyx',
  template: `
    <img src="assets/imgs/HLA/Header.jpg">
	<p class="title">Half Life: Alyx</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			sta prometedora entrega de Half Life tiene un factor que lo revoluciona todo: la realidad virtual. Steam, siempre caracterizada por usar tecnologías emergentes, se lanzó al vacío otorgando a los  fans de la saga esta entrega; no solo no era la tan esperada parte 3, también requería unas gafas de alto presupuesto.
			<br><br>
		</div>
		<div class="review-paragraph">
			La experiencia aprovecha la realidad virtual en cada una de sus partes de manera original y espectacular. Contiene acción, tensión y puzzles. Usamos movimientos de cabeza y manos para apuntar, recargar balas, abrir puertas, recoger objetos… Nunca los controles de un juego se habían sentido tan coherentes con respecto a las acciones que desempeña el personaje. Ello hace que la jugabilidad sea inmersiva, detenida y detallada. 
			<br><br>
			La historia es sencilla, precuela de Half Life 2, y nos pone en el papel de Alyx, quien deberá, con la ayuda del científico Russell, acabar con las fuerzas de la poderosa alianza. Ellos son culpables de traer a la tierra especies alienígenas tales como los Headcrabs, con la capacidad de poseer a humanos, o los Vortigaunts, con habilidades mentales telequinéticas. Estos últimos, empleados por la alianza para dar poder a sus armas de destrucción, se aliarán con nosotros en su contra. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/HLA/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Muchas mecánicas resultan novedosas ya que es un campo en descubrimiento y sin demasiados AAA que lo exploten, como es el caso. Algunas de ellas son el tener que taparse la boca para no aspirar gases venenosos, la resolución de puzles a través de la conexión de elementos jugando con la cámara y las manos, la adquisición de objetos usando la fuerza de los guantes de gravedad e incorporándolos a nuestro inventario acercando la mano a la espalda, etc. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Half-Life: Alyx no es solo uno de los mejores juegos de realidad virtual. También lo es fuera de ese entorno.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class HalfLifeAlyxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
