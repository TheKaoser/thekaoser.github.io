import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div id="skillCards">
		<div *ngFor="let skill of skills" class="card skillCard">
			<div class="card-content">
				<img src={{skill.image}}>
				<p class="is-bold is-size-4">
					{{skill.name}}
				</p>
				<p class="is-italic is-size-6">
					{{skill.description}}
				</p>
			</div>
		</div>
    </div>
  `,
  styles: [
	'#skillCards { margin-top: 200px; margin-left: 2.5%; margin-right: -2.5%; }',
	'.skillCard { margin-left: 12.5%; margin-bottom: 200px; width: 15%; height: 400px; float: left; background-color: #6f56ff; color: white; }',
  ]
})
export class SkillsComponent implements OnInit {
	skills : { name: string, description: string, image: string }[] = [ 
		{ name: "Passionate for coding", description : "From high level architecture to low level code details", image: "assets/imgs/Skill_1.png" }, 
		{ name: "O. O. Designer", description: "In C++, C#, Typescript, Python...", image: "assets/imgs/Skill_2.png" },
		{ name: "Experienced in", description: "Networking, Web, Databases, Multi-Threading, Machine Learning...", image: "assets/imgs/Skill_3.png" },
	];

	constructor() { 
	}

	ngOnInit(): void {
	}

}
