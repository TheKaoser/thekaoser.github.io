import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-me',
	template: `
	<div class="splashart"> 
		<img src="assets/imgs/SplashArt.png">
	</div>
	<p class="title">Rodrigo Alonso</p>
    <div id="about-me">
		<div id="me-text">
			<div class="is-bold big-text">DEVELOPER & PLAYER</div>
			<div class="is-italic small-text">
				From Playmobil, Magic: The Gathering or Warhammer, I have always enjoyed playing games and creating them. 
				<br><br>				
				It was already before starting Computer Science BA that I knew I wanted to base my career on creating video games, to create other worlds only limited by imagination. 
				For this, I specialized in it through a Master's degree afterwards.
				<br><br>
				I have more than 10 games built from scratch. They have taught me the fundamentals of game design, team collaboration, some 2D and 3D art, and above all, to become a better programmer. 
				<br><br>
				Now I work happily at Spearhead studios creating small games and waiting for new opportunities.
			</div>
		</div>
		<div id="photo"><img src="assets/imgs/Rodrigo.png"></div>
    </div>
  `,
	styles: [
		'#about-me { display: flex; margin: auto; margin-bottom: 5%; width: clamp(350px, 70%, 70%); justify-content: space-between; align-items: center; }',
		'#me-text { color: white; text-align: justify; }',
		'#photo { margin-top: -100px; margin-left: 5%; border-radius: 10px; }',
		'@media screen and (max-width: 1200px){ #about-me { flex-direction: column; } #me-text{ width: 70%; } #photo{ margin-top: 0px; margin-left: 0%; width: 70%; }}',
		'@media screen and (min-width: 1200px){ #me-text{ width: 60%; } #photo{ width: 40%; }}',
	]
})

export class AboutMeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
