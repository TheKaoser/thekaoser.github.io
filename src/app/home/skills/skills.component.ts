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
	'#skill-card:hover { transform: scale(1.05); transition: transform 0.2s ease-in-out; }',
	'@media screen and (max-width: 1000px){ #skill-cards { flex-direction: column; align-items: center; } #skill-card { width: 60%; margin-bottom: 5%; }}',
  ]
})
export class SkillsComponent implements OnInit {
	skills : { name: string, description: string, image: string }[] = [ 
		{ name: "Passionate for Coding", description : "From high level architecture to low level details", image: "assets/imgs/Skill_1.png" }, 
		{ name: "Passionate for Game Design", description: "That is, helping the player achieve a great experience", image: "assets/imgs/Skill_2.png" },
		{ name: "Involved in", description: "Networking, Web, Databases, Multi-Threading, Machine Learning...", image: "assets/imgs/Skill_3.png" },
	];

	constructor() { 
	}

	ngOnInit(): void {
	}

}
