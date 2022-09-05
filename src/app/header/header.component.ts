import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar is-black py-1" id="header" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item ml-2 p-4" routerLink=""><img src="assets/icons/Kaoser.png"></a>
            <a class="navbar-item mx-4 is-size-6 is-italic" routerLink="projects">PROJECTS</a>
            <a class="navbar-item mx-4 is-size-6 is-italic" routerLink="reviews">REVIEWS</a>
            <a (click)="toggleNavbar()" #navBurger role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarSocials">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbarSocials" #navMenu>
            <div id="socials">
                <a class="navbar-item p-4 mr-3 is-pulled-right" href="https://github.com/TheKaoser" target="_blank"><img src="assets/icons/GitHub.png"></a>
                <a class="navbar-item p-4 mr-3 is-pulled-right" href="https://www.twitch.tv/thekaoser" target="_blank"><img src="assets/icons/Twitch.png"></a>
                <a class="navbar-item p-4 mr-3 is-pulled-right" href="https://www.youtube.com/channel/UCVJ3aNNjDRFC-OzKfaAbTrQ" target="_blank"><img src="assets/icons/Youtube.png"></a>
            </div>
        </div>
    </nav>
  `,
    styles: [
		'#header { position: sticky; top: 0px; }',
		'#navbarSocials { padding: 0; justify-content: flex-end; }',
		'#socials { display: flex; justify-content: flex-end; margin: 0; background-color: black; }',
		'.navbar-item:hover { background-color: transparent; }'
    ]
})

export class HeaderComponent implements OnInit {
    @ViewChild('navBurger') navBurger!: ElementRef;
    @ViewChild('navMenu') navMenu!: ElementRef;

    toggleNavbar() {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    }

    constructor() { }

    ngOnInit(): void { }
}

