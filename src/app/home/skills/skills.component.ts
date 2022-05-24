import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div id="skillCards">
		<div class="card skillCard">
			<div class="card-content">
				<img src="assets/imgs/Skill_1.png">
				<p class="is-bold is-size-3">
					Passionate for coding
				</p>
				<p class="is-italic is-size-5">
					From high level architecture to low level code details
				</p>
			</div>
		</div>
		<div id="midSkillCard" class="card skillCard">
			<div class="card-content">
				<img src="assets/imgs/Skill_2.png">
				<p class="is-bold is-size-3">
					Object Oriented Designer
				</p>
				<p class="is-italic is-size-5">
					In C++, C#, Typescript, Python...
				</p>
			</div>
		</div>
		<div class="card skillCard">
			<div class="card-content">
				<img src="assets/imgs/Skill_3.png">
				<p class="is-bold is-size-3">
					Experienced programmer
				</p>
				<p class="is-italic is-size-5">
					Networking, Web, Databases, Multi-Threading, Machine Learning...
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
	'#skillCards { margin-top: 200px; margin-left: 15%; margin-right: 15%; }',
	'.skillCard { width: 23%; float: left; margin-bottom: 200px; }',
	'#midSkillCard { margin-right: 15%; margin-left: 15%; }',
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
