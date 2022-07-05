import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyberpunk2077',
  template: `
    <img src="assets/imgs/CP2077/Header.png">
	<p class="title">Cyberpunk 2077</p>
	<div class="review-detail">
		<div class="review-first-letter">
			N
		</div>
		<div class="review-intro">
			ight City, una ciudad futurista completamente industrializada y capitalizada, en mitad del desierto, donde las corporaciones han tomado el control y cuya única regla es la ley del más fuerte. Aquí es donde nos vemos en la piel de V, a quien le esperan todo tipo de situaciones y dilemas en esta supuesta realidad.
			<br><br>
		</div>
		<div class="review-paragraph">
			Empezamos escogiendo su sexo, cosméticos e injertos y uno de los tres orígenes ofertados: nómada, niño de las calles o corpo. A través de la introducción de alijos en Night City, del intento de robo fallido de un lujoso coche o de una conspiración que provocará nuestro despido de una empresa sucesivamente, se nos introduce en Night City. Una pequeña ventana al árbol de posibilidades que se avecina. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/CP2077/Car.jpg">
		<div class="review-paragraph">
			<br>
			En seguida, se nos plantea el problema del que somos víctimas: Tras el robo de un valioso e innovador biochip experimental de la dominante empresa japonesa Arasaka, presenciaremos el clandestino asesinato por parte del hijo del CEO a este mismo. Estos hechos terminarán forzando la inserción del biochip en nuestra cabeza para protegerlo. 
			<br><br>
			Al despertar, nos encontramos que el biochip nos está implantando una nueva personalidad que nos terminaría matando en un breve periodo y no tenemos opción de retirarlo. Esta es la personalidad de Johnny Silverhand, un roquero que vivió 50 años atrás. A partir de entonces, nos comunicamos con Johny, con quien iremos desarrollando una relación divertida y cómica, que comienza siendo de odio. 
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/CP2077/Johny.jpg">
		<div class="review-paragraph">
			<br>
			Durante la aventura, intimamos con varios personajes, muchos de los cuales podemos llegar a enamorar: Panam, una nómada del desierto, que busca reinsertarse en su clan; River, un policía que realiza desesperados intentos por cumplir la ley en un entorno de corrupción, pero que ha descuidado por ello su familia; Judy, una netrunner que investiga, en la delictiva red de prostitución, lo ocurrido a su amante Evelynn; Delamain, una inteligencia artificial que se encarga de controlar los taxis inteligentes de la ciudad, entre los que hay ciertos problemas que plantean dilemas diversos e interesantes.
			<br><br>
			V se construye con un amplio rango de posibilidades, entre el que probar y disfrutar según tus preferencias. Sus habilidades se desbloquean al usar la rama relacionada con ellas: armas cuerpo a cuerpo o pesadas, armas ligeras, construcción de armas, atuendos y accesorios, realización de hackeos y sigilo o asesinatos consecutivos. Hay una enorme cantidad de armas y atuendos que podemos encontrar o fabricar y configurar añadiendo accesorios como miras o silenciadores y modificadores que añaden atributos pasivos. Por último, a través de los “matasanos”, se instala cyberware en nuestro cuerpo para mejorar nuestra visión, cantidad de RAM para hackeos, resistencia pulmonar, altura de salto o añadir dispositivos cortantes en nuestro brazos llamados mantis. En la dificultad estándar, supone un reto escoger la manera de solventar cada combate, lo que aumenta el deseo de personalizar al máximo nuestro equipo.
			<br><br>
		</div>
		<img class="review-image-center" src="assets/imgs/CP2077/Hacking.jpeg">
		<div class="review-paragraph">
			<br>
			La ciudad está cargada de encargos menores ofrecidos por los llamados fixers, que nos permitirán usar las diversas y balanceadas posibilidades de combate que se ofrecen en historias cortas que aprovechan para explicar el entorno. 
			<br><br>
			Al final de la aventura, podemos decidir, según nuestros vínculos, como abordar el problema del biochip. El desenlace es triste y emotivo. Tiene multitud de ramas y nos permite mirar atrás para ver la magnitud de la narración, magnífica y bien hilada.
			<br><br>
		</div>
		<div class="review-conclusion">
			En definitiva, Cyberpunk 2077 es una historia fantástica, en un universo vivo y colmado de interés, donde liberar nuestras ansias de exploración y disfrutar de mecánicas futuristas, mientras nos enamoramos, ayudamos a unos y otros, y tratamos de mantener la cordura ante la segunda voz de nuestra cabeza, Johny Silverhand.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class Cyberpunk2077Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
