import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genshin',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/Genshin/Header.jpg">
	</div>
	<p class="title">Genshin Impact</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			s increíble cómo evoluciona la industria, pudiendo tener títulos tan completos como este, mayoritariamente de un jugador, completamente gratis. Genshin Impact, uno de los RPG del momento, es un ejemplo de esto.
			<br><br>
		</div>
		<div class="review-paragraph">
			Con unos gráficos de estilo de pocos y brillantes colores que enfatizan su temática de anime  japonés, Genshin dispone de amplias mecánicas de exploración del mundo como escalar, planear o nadar y multitud de zonas explorables ya sean puzzles para abrir cofres, jefes distribuidos por el mundo, misiones principales y secundarias o templos.  Un mundo que pide a gritos ser explorado.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Genshin/Fly.jpg">
		<div class="review-paragraph">
			<br>
			El personaje se puede intercambiar entre uno de los cuatro asignados en cualquier momento. Cada uno utiliza un tipo de arma: espada, lanza, claymore, arco o libro mágico, y dispone de dos habilidades que comparten elemento; una con cooldown y la otra obtenida al matar enemigos. Los elementos se pueden combinar, tanto entre tus personajes como con los de los enemigos, para crear nuevos efectos de daño. Por ejemplo, el agua y la electricidad sobrecargan o el viento propaga el fuego… Algo original y efectivo para hacer que el cambio entre personajes sea la mejor alternativa.
			<br><br>
			La manera de conseguir los personajes es sin duda el punto más controvérsico. Se trata de un gachapon en el que tocan aleatoriamente armas o personajes. Aquí entran los pagos del juego, aunque también se pueden conseguir jugando. La parte positiva es que ningún personaje o arma es irremplazable y están balanceados para poder hacer un equipo con varias combinaciones. Dicho esto, yo me decanto a favor del sistema, ya que es completamente opcional.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/Genshin/Gameplay.jpg">
		<div class="review-paragraph">
			<br>
			Hay varias formas para mejorar personajes. La primera es la más obvia: jugar con ellos, que puede sustituirse por el uso de unos pergaminos. La última forma consiste en invertir copias repetidas del personaje para desbloquear constelaciones que lo hacen un poco más eficiente. Aparte, se pueden equipar artefactos para mejorar ciertas virtudes como el daño o la vida. Estos artefactos y las armas se pueden subir de nivel a través de ciertos objetos que, al igual que los pergaminos, se consiguen a través de la exploración del mundo.
			<br><br>
			Para concluir, el juego incluye un sistema online cooperativo de hasta 4 jugadores, cada uno con 1 o 2 personajes, en el que el jugador anfitrión es el único capaz de abrir cofres y ninguno puede realizar misiones. Es exclusivamente para derrotar jefes, realizar dominios (una especie de mazmorras), y, por supuesto, fardar de equipo. 
			<br><br>
		</div>
		<div class="review-conclusion">
			Es impresionante que Genshin Impact pueda ser gratis, incluso posiblemente haya recaudado más así, siendo tan grande, teniendo un combate tan interesante y una exploración entrañable. No se pierde nada por probarlo.
		</div>
	</div>
  `,
  styles: [
  ]
})
export class GenshinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
