import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metal-gear-solid3',
  template: `
    <img src="assets/imgs/MGS3/Header.jpg">
	<p class="title">Metal Gear Solid 3: Snake Eater</p>
	<div class="review-detail">
		<div class="review-first-letter">
			B
		</div>
		<div class="review-intro">	
			asado en la guerra fría entre Rusia y Estados Unidos, Metal Gear Solid 3 innova utilizando mecánicas realistas para aumentar efectivamente la inmersión y la tensión.
			<br><br>
		</div>
		<div class="review-paragraph">
			Para evitar al enemigo hay que cambiar de camuflaje para que se adapte al terreno, meterte dentro de cajas o subirse a árboles. Del mismo modo, descubrir al enemigo conlleva el uso de radares, sonares y visión térmica, además de la información que te den tus camaradas por radio. Al ser herido, hay que curarse con remedios diferentes, como extraer balas, desinfectar heridas, o aplicar vendajes. También se pueden recolectar vegetación y seres vivos para alimentarse y recuperar vida. Entre los seres vivos se encuentran las serpientes, que le dan el nombre al juego.
			<br><br>
			La aventura te pondrá en la piel de Snake, un agente de la CIA americano, que tiene como propósito desmantelar la creación de un arma nuclear rusa llamada Shagohod. Para ello se enfrentará contra el Coronel Volgin y sus secuaces y a la Unidad Cobra, conformada por jefes con debilidades específicas que tendremos que averiguar para poder derrotar. Por suerte, contaremos con una espía, EVA, la cual nos desvelará los secretos de los complejos donde debemos infiltrarnos. A pesar de su instrucción y fuerza de voluntad, Snake acabará siendo seducido por ella. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/MGS3/Gameplay.jpeg">
		<div class="review-paragraph">
			<br>
			Al final ocurren varios giros de argumento, anonadantes y bien maquinados. The Boss resulta estar de parte del enemigo y con suma tristeza debemos acabar con ella. Además, pronto descubrimos que EVA ha huido, desvelándose que trabaja para los chinos y nos ha utilizado para robar el dinero con el que se subvencionaba el Shagohod. Pero esto es solo el principio de la tragedia: como cúlmen, The Boss no era una traidora, había sido descubierta públicamente con el Coronel y por ello se había sacrificado para demostrar que no quedaba nadie a favor de la guerra nuclear. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Metal Gear Solid 3 es una obra impactante y con mecánicas extraordinarias. Una joya que ningún gamer debería dejar pasar.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class MetalGearSolid3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
