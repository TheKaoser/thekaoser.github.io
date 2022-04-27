import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <div id="video-div">
      <video id="video" height="100%" width="100%" autoplay muted loop poster="assets/imgs/Glaciar.png">
          <source type="video/mp4" src="/assets/videos/Oculus.mp4" >
      </video>
      <img id="videoShape" src="./assets/imgs/VideoShape.png">
    </div>

    <div class="card">
      <div class="card-content">
        <div class="content is-family-arial has-text-centered">
            Game Developer and Player. <br><br>
            I studied Computer Science and a Master in Game Technology and, most importantly, I have developed my own games from engines like Unity, Unreal, and other creative tools. <br><br>
            My mission is to create the best entertainment possible for players by using this new form of art which I love. I will put all my passion, creativity and effort into this task. <br><br>
            On this web you will find some of the games I have made. Most of their assets are self made. Enjoy!
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
