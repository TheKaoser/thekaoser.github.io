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
				<br>
				From Playmobil, Magic: The Gathering and Warhammer, I've always loved playing games and imagining new worlds.
				<br><br>				
				Even before studying Computer Science, I knew I wanted to build a career creating immersive experiences limited only by imagination. That passion led me to pursue a Master's degree in Game Development immediately after earning my degree.
				<br><br>
				Currently, I'm part of my biggest game project: <b>Fatal: Unleashed Darkness</b>, where I lead the programming team and contribute to the game design.
				<br><br>
				Over the years, I've built more than 10 games from scratch, often participating in game jams along the way. Each project has been a valuable lesson in game design, team collaboration, art, and development.
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
