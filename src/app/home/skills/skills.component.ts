import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div id="skill-cards">
		<div *ngFor="let skill of skills" id="skill-card">
			<div class="card-content">
				<img src={{skill.image}}>
				<p class="is-bold medium-text">
					{{skill.name}}
				</p>
				<p class="is-italic small-text">
					{{skill.description}}
				</p>
			</div>
		</div>
    </div>
  `,
  styles: [
	'#skill-cards { display: flex; width: 70%; margin: auto; justify-content: space-between; margin-bottom: 5%; }',
	'#skill-card { width: 25%; background-color: #6f56ff; color: white; border-radius: 10px; }',
	'@media screen and (max-width: 1000px){ #skill-cards { flex-direction: column; align-items: center; } #skill-card { width: 60%; margin-bottom: 5%; }}',
  ]
})
export class SkillsComponent implements OnInit {
	skills : { name: string, description: string, image: string }[] = [ 
		{ name: "Passionate for coding", description : "From high level architecture to low level code details", image: "assets/imgs/Skill_1.png" }, 
		{ name: "Object Oriented", description: "In C++, C#, Typescript, Python...", image: "assets/imgs/Skill_2.png" },
		{ name: "Expert in", description: "Networking, Web, Databases, Multi-Threading, Machine Learning...", image: "assets/imgs/Skill_3.png" },
	];

	constructor() { 
	}

	ngOnInit(): void {
	}

}
