import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div id="skillCards">
		<div class="card skillCard">
			<div class="card-content">
				<p class="title">
					From High level architecture...
				</p>
				<p class="subtitle">
					to low level code details
				</p>
			</div>
		</div>
		<div class="card skillCard">
			<div class="card-content">
				<p class="title">
					Object Oriented Programming
				</p>
				<p class="subtitle">
					With languages like C++, C#, Typescript, Python...
				</p>
			</div>
		</div>
		<div class="card skillCard">
			<div class="card-content">
				<p class="title">
					Experienced programmer
				</p>
				<p class="subtitle">
					network programming, web technologies, databases, multi-threading and asynchronous programming
				</p>
			</div>
		</div>
    </div>
    <!-- <p>
      My skills cover from high level architecture to low level code details, having extensive experience in object-oriented design, network programming, web technologies, databases, multi-threading and asynchronous programming. 
      <br><br>
      My mission is to create the best entertainment possible for players by using this new form of art which I love and in which I will put all my passion, creativity and effort. This is why I also focus on reviewing the games I play, stream on Twitch to discuss about them and program new side projects every day.
      <br><br>
      On this web you will find my best projects along with my reviews. Enjoy!
    </p> -->
  `,
  styles: [
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
