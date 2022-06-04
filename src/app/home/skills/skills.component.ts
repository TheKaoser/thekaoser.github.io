import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div id="skillCards">
		<div class="card skillCard">
			<div class="card-content">
				<img src="assets/imgs/Skill_1.png">
				<p class="is-bold is-size-4">
					Passionate for coding
				</p>
				<p class="is-italic is-size-6">
					From high level architecture to low level code details
				</p>
			</div>
		</div>
		<div id="midSkillCard" class="card skillCard">
			<div class="card-content">
				<img src="assets/imgs/Skill_2.png">
				<p class="is-bold is-size-4">
					O. O. Designer
				</p>
				<p class="is-italic is-size-6">
					In C++, C#, Typescript, Python...
				</p>
			</div>
		</div>
		<div class="card skillCard">
			<div class="card-content">
				<img src="assets/imgs/Skill_3.png">
				<p class="is-bold is-size-4">
					Experienced in
				</p>
				<p class="is-italic is-size-6">
					Networking, Web, Databases, Multi-Threading, Machine Learning...
				</p>
			</div>
		</div>
    </div>
  `,
  styles: [
	'#skillCards { margin-top: 200px; margin-left: 15%; margin-right: 15%; }',
	'.skillCard { width: 23%; height: 400px; float: left; margin-bottom: 200px; background-color: #6d8fff; color: white;}',
	'#midSkillCard { margin-right: 15%; margin-left: 15%; }',
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
