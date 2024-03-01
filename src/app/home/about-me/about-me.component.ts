import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-me',
	template: `
	<div class="splashart"> 
		<img class="main-img" src="assets/imgs/SplashArt.png">
	</div>
	<p class="title">Rodrigo Alonso</p>
    <div id="about-me">
		<div id="me-text">
			<div class="is-bold big-text">DEVELOPER & PLAYER</div>
			<div class="is-italic small-text">
				From Playmobil, Magic cards and Warhammer, I have always enjoyed playing and imagining games. 
				<br><br>				
				It was before studying Computer Science that I knew I wanted to base my career creating these worlds only limited by imagination...
				And so, I jumped into a Master's degree in Games right after finishing it.
				<br><br>
				I also started working profesionally creating small games and now I work in Indra on full flight simulators.
				<br><br>
				Over these years, I have crafted more than 10 games from scratch. They have taught me the fundamentals of game design, team collaboration, art and development. 
			</div>
		</div>
		<div id="photo-div"><img id="photo-img" src="assets/imgs/Rodrigo.png"></div>
    </div>
  `,
	styles: [
		'#about-me { width: 70%; display: flex; margin: auto; margin-bottom: 5%; justify-content: space-between; }',
		'#me-text { display: flex; flex-direction: column; justify-content: center; width: 40%; color: white; text-align: justify; }',
		'#photo-div { display: flex; flex-direction: column; justify-content: center; margin-top: -100px; margin-left: 5%; width: clamp(500px, 30%, 30%)}',
		'#photo-img { border-radius: 10px; }',
		'@media screen and (max-width: 1200px){ #about-me { flex-direction: column; } #me-text{ width: 90%; margin: auto } #photo-div{ margin: auto; width: 90%; }}',
	]
})

export class AboutMeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
