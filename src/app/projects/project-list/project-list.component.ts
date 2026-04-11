import { Component } from '@angular/core';
import { projects } from '../projects';
import { Project } from '../project.model';

@Component({
	selector: 'app-project-list',
	template: `
	<div id="project-list">
		<div class="project" *ngFor="let project of projects; trackBy: trackByName">
			<a [href]="project.link" target="_blank">
				<div class="project-components">
					<div class="project-texts">
						<p class="project-title big-text is-bold">{{project.name}}</p>
						<div class="project-details small-text is-italic">
							{{project.description}}
							<br><br>
							<ul>
								<li>{{project.role}}</li>
								<li>{{project.engine}}</li>
							</ul>
						</div>
						<div class="project-links">
							<a *ngIf="project.github" [href]="project.github" target="_blank" class="github"><img src="assets/icons/GitHub.png"></a>
							<a *ngIf="project.youtube" [href]="project.youtube" target="_blank" class="youtube ml-6"><img src="assets/icons/Youtube.png"></a>
							<a *ngIf="project.gdd" [href]="project.gdd" target="_blank" class="gdd ml-6"><img src="assets/icons/GDD.png"></a>
							<br><br>
						</div>
					</div>
					<img class="project-image" [src]="project.image">
				</div>	
				<div class="project-highlights">
					<div *ngFor="let highlight of project.highlights" class="project-highlight">
						<p class="highlight-text is-italic small-text">{{highlight}}</p>
					</div>
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#project-list { display: flex; flex-direction: column; align-items: center; width: 100%; margin-bottom: 10%; }',
		'.project { position: relative; width: 70%; margin-bottom: 7.5%; background-color: #6f56ff; border-radius: 10px; }',
		'.project:hover { transform: scale(1.05); transition: transform 0.3s ease-in-out; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); }',
		'.project-components { display: flex; justify-content: space-between; }',
		'.project-texts { display: flex; flex-direction: column; margin: 2%; justify-content: space-around; }',
		'.project-title { color: white; }',
		'.project-details { color: white; margin-top: 5%; margin-bottom: 7%; }',
		'.project-details ul { padding-left: 20px; margin: 0; }',
    	'.project-details li { list-style-type: disc; color: white; margin-bottom: 5px; }',
		'.project-image { border-radius: 10px; object-fit: contain; }',
		'.project-links { align-self: left; color: white; }',
		'.project-links a { margin-right: 2%; }',
		'.github img:hover { transform: scale(1.3); transition: transform 0.2s ease-in-out; }',
		'.youtube img:hover { transform: scale(1.3); transition: transform 0.2s ease-in-out; }',
		'.gdd img:hover { transform: scale(1.3); transition: transform 0.2s ease-in-out; }',
		'.project-highlight { display: flex; margin-right: 5px; margin-bottom: 5px; width: 22.5%; height: clamp(30px, 5vw, 60px); background-color: #6b2cff; color: white; border-radius: 10px; }',
		'.highlight-text { margin: auto; }',
    	'.project-highlights { transform: scale(1); transition: none; position: absolute; display: flex; width: 70%; margin-left: 5%; }',
		'@media screen and (max-width: 1200px){ .project-components { flex-direction: column; } .project-image { width: 100%; } .project-texts{ width: 90%; } .project-highlight{ width: 85%; margin: auto; } .project-highlights{ flex-direction: column; justify-content: center; margin: auto; width: 90%; } .project{ width: 90%; margin-bottom: 20%; }}',
		'@media screen and (min-width: 1200px){ .project-image { width: 50%; } .project-texts{ width: 60%; } .project { width: 70%; }}',
	]
})
export class ProjectListComponent {
	projects: Project[] = projects;

	trackByName(_index: number, project: Project): string {
		return project.name;
	}
}
