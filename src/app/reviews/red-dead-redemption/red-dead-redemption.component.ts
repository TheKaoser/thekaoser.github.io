import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-dead-redemption',
  template: `
    <img src="assets/imgs/RDR/Header.jpg">
	<p class="title">Red Dead Redemption</p>
	<div class="review-detail">
		<div class="review-first-letter">
			S
		</div>
		<div class="review-intro">	
			omos John Marston, un forajido del oeste americano que intenta redimirse de su pasado para recuperar su rancho y familia. Estamos dispuestos a colaborar con las autoridades corruptas para atrapar a nuestro hermano, que sigue siendo forajido, si es necesario.
			<br><br>
		</div>
		<div class="review-paragraph">
			Debemos estar preparados para realizar numerosas tareas en las tierras tejanas que incluirán cuidar del ganado, ayudar al serif, servir a un comerciante estafador de medicamentos o participar en duelos. 
			<br><br>
			Por desgracia, la jugabilidad queda en segundo plano. Aunque es relativamente cómoda y no demasiado difícil, el combate dispone de apuntado automático de las varias armas que acabaremos teniendo pero que dispondrán de poca personalización y estrategia de uso. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/RDR/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Los acontecimientos, narrados en forma de misiones de corta duración y sin orden estricto, nos llevarán también a México, donde la población no solo odia a los estadounidenses, si no que también tienen conflictos internos entre la clase alta y la baja. Finalmente, volveremos a Texas, donde comienza la era industrial con casas más modernas, los primeros automóviles y pistolas más recientes. Aquí concluimos la caza de nuestro hermano y nos podremos retirar a nuestro rancho con nuestra mujer e hijo. 
			
			Sin embargo, no pasará mucho tiempo antes de que las autoridades, a las cuales hemos dejado de interesarles, acaben con nosotros. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Red Red Redemption te lleva a un viaje por la crudeza de la América de principios del siglo XX. Aunque las mecánicas no sobresalen y a veces enturbian la experiencia, uno queda gratamente sorprendido gracias a la aventura.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class RedDeadRedemptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
