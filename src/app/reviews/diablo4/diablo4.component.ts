import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diablo4',
  template: `
    <div class="splashart">
      <img src="assets/imgs/Diablo4/Header.jpg">
    </div>
    <p class="title">Diablo IV</p>
    <div class="review-detail">
      <div class="review-first-letter">
        E
      </div>
      <div class="review-intro">	
        s un mundo precioso, pero cada uno de sus poros salpica desolación. Una sutil melodía desvela demasiado… Santuario ya no es si no un resquicio de lo que fue y eso no es ni la mitad de en lo que está por convertirse. 
        <br><br>
      </div>
      <div class="review-paragraph">
        Empecemos por la parte más objetiva: La ambientación de Diablo IV es increíble. Basta con pasearse por uno de sus escenarios para quedar absorbido por sus tonalidades y luces, nivel de detalle, animaciones concordantes con sus sonidos, música brillante e interfaz limpia. Esto es por suerte acompañado por una narrativa igual de envolvente, en la que aparecen cinemáticas que dejan los pelos de punta. Las voces, en Español y presentes en cada diálogo, no se quedan atrás y aparecen en conversaciones concisas y fáciles de seguir. Todo es sencillo y gratificante y le da al jugador sensación de control.
        <br><br>
        Durante la campaña, Lilith, la hija del demonio mayor Mefisto, libera un conflicto con el arcángel Inarius del que penden los destinos del resto de habitantes de Santuario. A pesar del aparente papel contrapuesto que toma cada uno, se suscitan dudas constantemente sobre el bando en el que realmente reside el mal. La decisión que tomamos nos dejará en un estado de similar desolación al inicial, algo que me parece fascinante.
        <br><br>
      </div>
      <img class="review-image" src="assets/imgs/Diablo4/Cine.jpg">
      <div class="review-paragraph">
        <br>
        Pero el gameplay es sin duda la mejor parte. Un equilibrio perfecto entre planificación de estadísticas y su uso contra todo tipo de monstruos. Tras elegir una de las bien definidas clases y personalizarla físicamente empieza el desbloqueo de habilidades. Estas son visuales, bien explicadas y fáciles de probar ya que se pueden reasignar. Su combinación de hasta 6 ofrece diferentes modos de juego y aunque están separadas por categorías, no imponen restricciones. Eso sí, es recomendable tener alguna que gaste cada recurso para aprovecharlos, y alguna sin enfriamiento para tener algo que usar mientras el resto se recarga. 
        <br><br>
        Los puntos de habilidad se otorgan hasta el nivel 50, momento en el que quedan muchas activas y pasivas esperando a ser escogidas. A partir de ahí, se empezarán a obtener puntos de leyenda, para un gran árbol que aumentan ligeramente alguna estadística, con bonificaciones por seguir patrones. 
        <br><br>
        La otra vertiente de adquirir poder, y de igual importancia y entretenimiento que la anterior, es a través del equipo que encontremos, con numerosas estadísticas activas y pasivas. Las activas se llaman rasgos y se pueden desvincular y equipar a otro equipo una vez a través de los llamados ocultistas. Disponen de un porcentaje aleatorio del rasgo que hace que siempre puedas seguir mejorando.
      </div>
      <img class="review-image" src="assets/imgs/Diablo4/Gear.jpg">
      <div class="review-paragraph">
        <br>
        El combate es pausado, estratégico y táctico. Un descuido puede producir tu muerte y es importante atender a los ataques enemigos para esquivarlos cuando sea necesario. Las pociones son limitadas, y se recargan al matar enemigos o consumir las divisiones de los jefes. Este sistema te obliga a esquivar, moverte para recogerlas y administrarlas con sabiduría.
        <br><br>
        Matar enemigos porque sí ya resulta divertido, pero se ofrecen eventos sencillos con jugosas recompensas que aumentan el placer obtenido: oleadas, evitar que un demonio sea protegido por sus súbditos, presionar altares de sangre, proteger aldeanos emboscados o escoltarlos, etc. Además, encontramos sótanos con pequeñas misiones, goblins que escapan con tesoros, jefes de mundo con gran daño que se derrotan entre varios jugadores a determinadas horas…
      </div>
        <img class="review-image" src="assets/imgs/Diablo4/Combat.jpg">
      <div class="review-paragraph">
        <br>
        El contenido horizontal no falta; todo ello lo realizas a la par que completas el mapa. Misiones secundarias sencillas, fortalezas que una vez conquistadas se convierten en ciudades, dungeons que desbloquean rasgos, altares de lilith que otorgan pequeños bonuses permanentes o simplemente desbloquear su niebla de guerra. Todo esto aumenta el renombre de la zona, y llegado cierto nivel en cada una, se reciben nuevos puntos de habilidad, máximo de pociones, máximo de óbolos, una moneda intercambiable por equipo aleatorio en la ciudad y puntos de leyenda. Todas las zonas se balancean a tu nivel ofreciendo una mayor diversidad en todo momento y la posibilidad de juntarte con tus amigos de diferentes niveles a cambio de menor sensación de progreso, lo cual me ha parecido acertado.
        <br><br>
        A pesar de la cuantía de todo lo anterior, el endgame aguarda aún más actividades como las 2 zonas PVP para los más peleones, o la zona cambiante consumida por mareas infernales, que aumenta el número y la dificultad de los enemigos, que otorgan favilas al morir y se pueden canjear por más equipo. También quedaría por comentar las mazmorras de pesadilla, una versión más compleja que añade un afijo positivo y dos negativos como rayos que caen del cielo o chorros de llamas. Además, siempre disponemos de los favores nefastos que le hacemos al árbol de los susurros, con sus múltiples cabezas eternamente condenadas, de resolver los asuntos que nos propongan.
        <br><br>
      </div>
      <div class="review-conclusion">
        Diablo IV es un juego lleno de contenido. La primera parte más intensa e impresionante gracias a la aventura y el descubrimiento de las habilidades y rasgos. Luego, se hace más monótono, pero llevadero gracias a su efectivo núcleo jugable: combate y personalización hasta el límite.
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Diablo4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
