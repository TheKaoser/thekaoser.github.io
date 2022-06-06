import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-about-me',
	template: `
    <div class="cover-div">
		<img id="splashArt" src="assets/imgs/kaoser.png">
		<!-- <img id="videoShape" src="./assets/imgs/VideoShape.png"> -->
		<p class="title is-size-1 is-bold">Rodrigo Alonso</p>
    </div>
    <div id="about-me">
		<div class="header me-text is-bold is-size-1">
			DEVELOPER & PLAYER
		</div>
     	<div class="me-text is-italic has-text-left is-size-6">
			From Playmobil, Magic: The Gathering or Warhammer, I have always enjoyed playing games and creating them. It was already before starting Computer Science BA that I knew I wanted to base my career on it. For this, I specialized in it through a Master's degree afterwards.
			<br><br>
			I have more than 10 games built from scratch. They have taught me the fundamentals of game design, team collaboration, some 2D and 3D art, and above all, to become a better programmer. 
			<br><br>
			Now I work happily at Spearhead studios creating small games and waiting for new opportunities.
		</div>
		<div id="photo">
			<img src="assets/imgs/Rodrigo.png">
		</div>
    </div>
  `,
	styles: [
		'#splashArt { position:absolute; }',
		'#videoShape { position:absolute; }',
		'#about-me { position: relative; margin-top: 100px; }',
		'.header { color:mediumpurple; }',
		'.me-text { width: 35%; margin-left: 15%; margin-top: 15px; font-size: 15px; max-width: 700px; color: white; }',
		'#photo { position: absolute; max-width: 500px; top: -200px; right: 15%; object-fit: cover; }',
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
