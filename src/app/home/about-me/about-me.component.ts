import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-about-me',
	template: `
    <div class="cover-div">
		<img id="splashArt" src="assets/imgs/kaoser.png">
		<img id="videoShape" src="./assets/imgs/VideoShape.png">
		<p id="rodrigo" class="is-size-1 is-bold">Rodrigo Alonso</p>
    </div>
    <div id="about-me">
		<div class="me-text title is-bold is-size-1">
			DEVELOPER & PLAYER
		</div>
     	<div class="me-text is-italic has-text-left is-size-6">
			From Playmobil, Magic: The Gathering or Warhammer, I have always enjoyed playing games and creating them. It was already before starting Computer Science BA that I knew I wanted to base my career on it.
			<br><br>
			When I finished my Master, I had more than 10 games built from scratch. I learnt from trial and error about fundamentals of design, team collaboration and direction, a little 2D and 3D art, and software: my speciality. 
			<br><br>
			Now I work happily at Spearhead studios creating small games.
		</div>
		<div id="photo">
			<img src="assets/imgs/Rodrigo.png">
		</div>
    </div>
  `,
	styles: [
		'#rodrigo { margin: 0; position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%); color: white; }',
		'#splashArt { position:absolute; }',
		'#videoShape { position:absolute; }',
		'#about-me { position: relative; margin-top: 100px; }',
		'.title { color:mediumpurple; }',
		'.me-text { width: 40%; margin-left: 10%; margin-top: 15px; font-size: 15px; max-width: 700px; }',
		'#photo { position: absolute; max-width: 500px; top: -200px; right: 10%; object-fit: cover; }',
	]
})

export class AboutMeComponent implements OnInit {

	// ​@ViewChild('videoRef', { static: true }) videoRef!: ElementRef

	// ​ngAfterViewInit(): void {
	//   ​const media = this.videoRef.nativeElement
	//   ​media.muted = true
	//   ​media.play() 
	// ​ } 

	constructor() { }

	ngOnInit(): void {
	}

}