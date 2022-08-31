import { Component, OnInit } from '@angular/core';

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
	projects : { name: string, description: string, image: string, github?: string, youtube?: string, itch?: string, playstore?: string, gamejolt?: string, highlights: string[] }[] = [ 
		{ 
			name: "Sucked Souls", 
			description : "The undead can endlessly try to recover humanity by stealing souls... But being a human atracts evil.", 
			image: "assets/imgs/SuckedSouls.png",
			github: "https://github.com/TheKaoser/sucked-souls",
			itch: "https://thekaoser.itch.io/suck-souls",
			highlights: ["AI Navigation", "Highscore vs IA"]
		},
		{ 
			name: "Time Keeper", 
			description : "You are the Timekeeper. You must keep the gears of time moving forward by running against them. Avoid obstacles by changing your way but without changing your path and keep time moving eternally.", 
			image: "assets/imgs/TimeKeeper.png",
			github: "https://github.com/TheKaoser/time-keeper",
			itch: "https://threeraccoonsgames.itch.io/timekeeper",
			highlights: ["Procedural gears", "Black and White art"]
		},
		{ 
			name: "UFLINE", 
			description : "Push your tactical skills to their limits in this addictive UFO-themed minigame that will make you feel thrilling tension when played alone, and also cause countless friendship breakups when played against your equally noob fellows.", 
			image: "assets/imgs/UFLINE.png",
			github: "https://github.com/TheKaoser/ufline",
			gamejolt: "https://gamejolt.com/games/ufline/637773",
			highlights: ["Local Multiplayer", "Highscore vs IA"]
		},
		{ 
			name: "Basic RPG", 
			description : "Kill monsters and bosses, get special items, build unique equipment, trade with other players and fight for victory in the Arena.", 
			image: "assets/imgs/BasicRPG.png",
			github: "https://github.com/TheKaoser/basic-rpg",
			youtube: "https://www.youtube.com/watch?v=S8x_KV-txLo",
			playstore: "https://play.google.com/store/apps/details?id=com.dreamingbig.basicrpg",
			highlights: ["FB Authentication/Database", "Shared Market", "PVP Arena", "2D Spine Animations"]
		},
		{ 
			name: "Planet Fixer", 
			description : "The planet is being attacked! Gather resources, repair the damages and... Don't delay!", 
			image: "assets/imgs/PF.png",
			github: "https://github.com/AbsoluteTundra/GGJ2020Game",
			youtube: "https://www.youtube.com/watch?v=kUbibp_TwiY&feature=youtu.be",
			playstore: "https://play.google.com/store/apps/details?id=com.DreamingBig.PlanetFixer",
			highlights: ["Procedural Planets"]
		},
		{ 
			name: "Squeenks!", 
			description : "On a lost planet, some strange creatures are caught in a non-ending cycle of life and death. You have the power to contemplate what their destiny will be this time.", 
			image: "assets/imgs/Squeenks.png",
			github: "https://github.com/TheKaoser/squeenks",
			youtube: "https://www.youtube.com/watch?v=5MPgeJTiENw",
			playstore: "https://play.google.com/store/apps/details?id=com.DreamingBig.Squeenks",
			highlights: ["Three competing AIs", "3D models/animations"]
		},
		{ 
			name: "Fantastic Wars", 
			description : "Put yourself into the shoes of an aspirant to unleash memorable battles for the conquest of the kingdom. Choose among three characters full of personality to fight against other players and face an immensity of situations in which each decision has an echo.", 
			image: "assets/imgs/FW.png",
			github: "https://github.com/TheKaoser/fantastic-wars",
			youtube: "https://www.youtube.com/watch?v=cqJkbaSanuE",
			playstore: "https://play.google.com/store/apps/details?id=com.troncocaotico.fantasticwars",
			highlights: ["FB Real Time Database", "AI Navigation", "Distribution Algorithm", "Pixel Art Animations"]
		},
		{ 
			name: "Three Kingdoms", 
			description : "Three kingdoms that fell into misfortune are now habited by an horde of goblins that fight and reproduce at the same rate. Will you become the goblin god?", 
			image: "assets/imgs/TTK.png",
			github: "https://github.com/TheKaoser/the-three-kingdoms",
			youtube: "https://www.youtube.com/watch?v=wBYZ2-WWjaYgit",
			highlights: ["TCP Server with logic", "Multi-threaded clients", "3D models/animations"]
		},
	];
	
	constructor() { }
	
	ngOnInit(): void {
	}
	
}
