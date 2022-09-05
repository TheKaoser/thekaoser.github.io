import { Component, OnInit } from '@angular/core';
import projects from '../projects';

@Component({
	selector: 'app-project-list',
	template: `
	<div id="project-list">
		<div id="project" *ngFor="let project of projects">
			<img id="project-image" src={{project.image}}>
			<p id="project-title" class="is-size-1 is-bold">{{project.name}}</p>
			<div id="project-description" class="is-size-6 is-italic">
				{{project.description}}
			</div>
			<div id="project-links">
				<a *ngIf="project.github" href={{project.github}} target="_blank"><img src="assets/icons/GitHub.png"></a>
				<a *ngIf="project.youtube" class="ml-6" href={{project.youtube}} target="_blank"><img src="assets/icons/Youtube.png"></a>
				<a *ngIf="project.playstore" class="ml-6" href={{project.playstore}} target="_blank"><img src="assets/icons/GooglePlay.png"></a>
				<a *ngIf="project.itch" class="ml-6" href={{project.itch}} target="_blank"><img src="assets/icons/Itch.png"></a>
				<a *ngIf="project.gamejolt" class="ml-6" href={{project.gamejolt}} target="_blank"><img src="assets/icons/GameJolt.png"></a>
			</div>
			<div id="project-highlights">
				<div *ngFor="let highlight of project.highlights" id="project-highlight" class="card">
					<div class="card-content">
						<p class="is-italic is-size-6">
							{{highlight}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  `,
	styles: [
		'#project-list { display: flex; flex-direction: column; align-items: center; width: 100%  }',
		'#project { position: relative; width: 70%; margin-bottom: 15vh; background-color: #6f56ff; border-radius: 10px; }',
		'#project-title { position: absolute; margin: 0; top: 15%; left: 10%; right: 50%; color: white; }',
		'#project-description { position: absolute; margin: 0; top: 40%; left: 10%; right: 60%; color: white; }',
		'#project-image { margin-left: 50%; width: 50%; border-radius: 10px; }',
		'#project-links { position: absolute; margin: 0; bottom: 15%; left: 10%; }',
		'#project-highlights { position: absolute; top: 93%; margin-left: 5%; width: 100%; }',
		'#project-highlight { margin-right: 5px; width: 20%; height: 75px; float: left; margin-bottom: 200px; background-color: #6b2cff; color: white; }',
	]
})
export class ProjectListComponent implements OnInit {	
	projects: { name: string, description: string, image: string, github?: string, youtube?: string, itch?: string, playstore?: string, gamejolt?: string, highlights: string[] }[];

	constructor() { 
		this.projects = projects;
	}
	
	ngOnInit(): void {
	}
	
}
