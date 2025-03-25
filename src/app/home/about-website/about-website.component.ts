import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-website',
	template: `
	<div id="about-list">
		<div class="about-element">
			<a routerLink="projects"> 
				<div class="about-components">
					<div class="about-texts" id="about-text-left">
						<p class="big-text is-bold">EXPLORE MY PROJECTS</p>
						<p class="small-text is-italic">Whatever your taste in video games is, you will find something for you.</p>
					</div>
					<img class="about-image" src="assets/imgs/SuckedSouls.png">
				</div>
			</a>
		</div>
		<div class="about-element">
			<a routerLink="reviews"> 
				<div class="about-components">
					<img class="about-image" src="assets/imgs/ReviewsCut.png">
					<div class="about-texts" id="about-text-right">
						<p class="big-text is-bold">READ MY REVIEWS</p>
						<p class="small-text is-italic">Read my thoughts on some of the most iconic games of all times.</p>
					</div>
				</div>
			</a>
		</div>
	</div>
  `,
	styles: [
		'#about-list { display: flex; flex-direction: column; align-items: center; width: 100% }',
		'.about-element { position: relative; width: 70%; background-color: #6f56ff; border-radius: 10px; margin-bottom: 10%; }',
		'.about-element:hover { transform: scale(1.05); transition: transform 0.2s ease-in-out; }',
		'.about-components { display: flex; justify-content: space-between; }',
		'.about-texts { display: flex; flex-direction: column; margin: 5%; width: 25%; }',
		'#about-text-left { color: white; }',
		'#about-text-right { color: white; text-align: right; }',
		'.about-image { width: 50%; border-radius: 10px; object-fit: contain; }',
		'@media screen and (max-width: 1200px){ .about-components { flex-direction: column; } .about-image { width: 100%; } .about-texts{ width: 90%; } #about-text-right{ text-align: left; }}',
		'@media screen and (min-width: 1200px){ .about-image { width: 50%; } .about-texts{ width: 60% }}',
	]
})
export class AboutWebsiteComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
