import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nier-replicant',
  template: `
	<div class="splashart">
    	<img src="assets/imgs/NR/Header.png">
	</div>
	<p class="title">Nier Replicant Ver.1.22474487139...</p>
	<div class="review-detail">
		<div class="review-first-letter">
			E
		</div>
		<div class="review-intro">	
			jecutar un solo juego y jugar a varios; así es Nier Replicant al viajar entre sus zonas interconectadas. Zonas no solo diferenciadas por su estética y espectacular música; también por sus mecánicas e historias cerradas que se encuentran en ellas. 
			<br><br>
		</div>
		<div class="review-paragraph">
			Así, podremos pasar de una mansión tenebrosa, que provoca terror, con cámaras colocadas sobre el techo y visión en blanco y negro a un laboratorio de armas visto con cámara isométrica; o de un barco naufragado con cámara lateral y movimiento en dos dimensiones a un templo repleto de puzles a resolver o a un bosque donde leer largas historias del pasado. Nunca perdemos las ganas de descubrir lo que está por venir.
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/NR/Lab.jpg">
		<div class="review-paragraph">
			<br>
			El juego narra la historia de un joven que protege a su hermana Yonah de unas sombras malvadas. Para ello, se ayuda de un libro mágico llamado Grimoire Weiss, un personaje muy emblemático con el que vamos discutiendo, que carece de sentido del humor. Paulatinamente, se descifra una realidad terrible en la que la humanidad se extinguió a causa de un virus, dejando provisto un método para prolongar su supervivencia: Usar los grimorios para unir su alma a un cuerpo resistente a ese virus llamado Replicant.
			<br><br>
			La historia provoca constantemente sentimientos en el jugador; tristeza, alegría, culpabilidad... Todos los personajes con los que nos encontramos tendrán su propia tragedia que superar, como Emil, creado en un laboratorio para petrificar inevitablemente lo que ve, o Kaine, con su oscuro pasado. También sufriremos el tormento de asesinar a nuestras amigas, Devola y Popola, quienes nos cantan una de las obras más emblemáticas que narra cómo el mundo restaura la paz. 
			<br><br>
		</div>
		<img class="review-image" src="assets/imgs/NR/Devola.jpg">
		<div class="review-paragraph">
			<br>
			La segunda vez que se juega, Nier Autómata nos sorprende agregando nuevas escenas a los acontecimientos; un complemento para los interesados. Se entienden los motivos de las sombras a las que matas, que son los antiguos humanos intentando recuperar sus Replicant. Estos terminaron formando su propia conciencia y los protagonistas se encuentran entre ellos. Devola y Popola, androides defensoras de los humanos, terminan tornándose contra Yonah y el joven. 
			<br><br>
			Las batallas disponen de tres tipos de armas: espadas pequeñas, grandes o lanzas. Y varias magias con diferentes efectos y áreas, que se lanzan desde Grimoire Weiss. El resultado son animaciones un tanto sobrecargadas y confusas. También dispones de cierto margen de modificación, aunque pequeño, a través de palabras mágicas que vas desbloqueando y anexando a magias y armas. La dificultad no está del todo optimizada, ya que resulta muy sencillo por defecto y tedioso en algunas partes de la difícil.
			<br><br>
		</div>
		<div class="review-conclusion">
			Nier Replicant es un juego diferente, que sorprende con una mezcla novedosa de mecánicas y giros de argumento sentimentales. Su música es muy bella y juega un papel vital. 
		</div>
	</div>
  `,
  styles: [
  ]
})
export class NierReplicantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
