import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <div class="cover-div">
      <img id="splashArt" src="assets/imgs/kaoser.png">
      <img id="videoShape" src="./assets/imgs/VideoShape.png">
      <p id="rodrigo" class="is-size-1 is-family-arial">Rodrigo Alonso</p>
    </div>
      <div id="about-me">
        <div class="me-text title is-family-arial is-size-3">
          GAME DEVELOPER AND PLAYER
        </div>
        <div class="me-text is-family-sans-serif has-text-left">
            From Playmobil, Magic: The Gathering or Warhammer, I have always enjoyed playing games and creating them my own. It was already before even starting Computer Science BA that I knew I wanted to base my career on it.
            <br><br>
            When I finished my Master, I had already around 10 games built from scratch with Unity, Unreal Engine and Gamemaker. I learnt from trial and error about fundamentals of design, team collaboration and direction, a little 2D and 3D art, and software: my speciality. 
            <br><br>
            My skills cover from high level architecture to low level code details, having extensive experience in object-oriented design, network programming, web technologies, databases, multi-threading and asynchronous programming. 
            <br><br>
            My mission is to create the best entertainment possible for players by using this new form of art which I love and in which I will put all my passion, creativity and effort. This is why I also focus on reviewing the games I play, stream on Twitch to discuss about them and program new side projects every day.
            <br><br>
            On this web you will find my best projects along with my reviews. Enjoy!
        </div>

      <div id="photo">
        <img src="assets/imgs/Rodrigo.png">
      </div>

      <!-- <video id="video" height="40%" width="40%" autoplay muted loop preload #videoRef>
          <source type="video/mp4" src="assets/videos/Oculus.mp4" >
          <source type="video/ogg" src="assets/videos/Oculus.ogg" >
      </video> -->
    </div>
  `,
  styles: [
    '#rodrigo { margin: 0; position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%); color: white; }',
    '#splashArt { position:absolute; }',
    '#videoShape { position:absolute; }',
    '#about-me { position: relative; margin-top: 100px; }',
    '.title { color:mediumpurple; }',
    '.me-text { width: 50%; margin-left: 50px; margin-top: 15px; font-size: 15px; max-width: 700px; }',
    '#photo { position: absolute; max-width: 800px; top: -300px; right: 0%; object-fit: cover; }',
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
