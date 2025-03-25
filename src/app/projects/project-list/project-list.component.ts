import { Component, OnInit } from '@angular/core';
import projects from '../projects';

@Component({
	selector: 'app-project-list',
	template: `
	<div id="project-list">
		<div id="project" *ngFor="let project of projects">
			<a href={{project.link}} target="_blank">
				<div id="project-components">
					<div id="project-texts">
						<p id="project-title" class="big-text is-bold">{{project.name}}</p>
						<div id="project-details" class="small-text is-italic">
							{{project.description}}
							<br><br>
							<ul>
								<li>{{project.role}}</li>
								<li>{{project.engine}}</li>
							</ul>
						</div>
						<div id="project-links">
							<a *ngIf="project.github" href={{project.github}} target="_blank" class="github"><img src="assets/icons/GitHub.png"></a>
							<a *ngIf="project.youtube" class="ml-6" href={{project.youtube}} target="_blank" class="youtube"><img src="assets/icons/Youtube.png"></a>
							<a *ngIf="project.gdd" class="ml-6" href={{project.gdd}} target="_blank" class="gdd"><img src="assets/icons/GDD.png"></a>
							<br><br>
						</div>
					</div>
					<img id="project-image" src={{project.image}}>
				</div>	
				<div id="project-highlights">
					<div *ngFor="let highlight of project.highlights" id="project-highlight">
						<p id="highlight-text" class="is-italic small-text">{{highlight}}</p>
					</div>
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#project-list { display: flex; flex-direction: column; align-items: center; width: 100%; margin-bottom: 10%; }',
		'#project { position: relative; width: 70%; margin-bottom: 7.5%; background-color: #6f56ff; border-radius: 10px; }',
		'#project:hover { transform: scale(1.05); transition: transform 0.3s ease-in-out; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); }',
		'#project-components { display: flex; justify-content: space-between; }',
		'#project-texts { display: flex; flex-direction: column; margin: 2%; justify-content: space-around; }',
		'#project-title { color: white; }',
		'#project-details { color: white; margin-top: 5%; margin-bottom: 7%; }',
		'#project-details ul { padding-left: 20px; margin: 0; }',
    	'#project-details li { list-style-type: disc; color: white; margin-bottom: 5px; }',
		'#project-image { border-radius: 10px; object-fit: contain; }',
		'#project-links { align-self: left; color: white; }',
		'#project-links a { margin-right: 2%; }',
		'.github img:hover { transform: scale(1.3); transition: transform 0.2s ease-in-out; }',
		'.youtube img:hover { transform: scale(1.3); transition: transform 0.2s ease-in-out; }',
		'.gdd img:hover { transform: scale(1.3); transition: transform 0.2s ease-in-out; }',
		'#project-highlight { display: flex; margin-right: 5px; margin-bottom: 5px; width: 22.5%; height: clamp(30px, 5vw, 60px); background-color: #6b2cff; color: white; border-radius: 10px; }',
		'#highlight-text { margin: auto; }',
    	'#project-highlights { transform: scale(1); transition: none; position: absolute; display: flex; width: 70%; margin-left: 5%; }',
		'@media screen and (max-width: 1200px){ #project-components { flex-direction: column; } #project-image { width: 100%; } #project-texts{ width: 90%; } #project-highlight{ width: 85%; margin: auto; } #project-highlights{ flex-direction: column; justify-content: center; margin: auto; width: 90%; } #project{ width: 90%; margin-bottom: 20%; }}',
		'@media screen and (min-width: 1200px){ #project-image { width: 50%; } #project-texts{ width: 60%; } #project { width: 70%; }}',
	]
})
export class ProjectListComponent implements OnInit {	
	projects: { name: string, description: string, role: string, engine: string, image: string, github?: string, youtube?: string, gdd?: string, link?: string, highlights: string[] }[];

	constructor() { 
		this.projects = projects;
	}
	
	ngOnInit(): void {
	}
	
}
