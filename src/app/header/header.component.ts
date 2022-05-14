import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar is-black is-fixed-top py-1" role="navigation" aria-label="main navigation">
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
        <div id="navbarSocials" class="navbar-menu has-background-black" #navMenu>
            <div class="navbar-end is-right">
                <a class="navbar-item p-4 mr-3 is-pulled-right has-background-black" href="https://github.com/TheKaoser" target="_blank"><img src="assets/icons/GitHub.png"></a>
                <a class="navbar-item p-4 mr-3 is-pulled-right has-background-black" href="https://www.twitch.tv/thekaoser" target="_blank"><img src="assets/icons/Twitch.png"></a>
                <!-- <a class="navbar-item p-4 mr-3" href="https://www.linkedin.com/in/rodrigo-alonso-garcía-amorena/" target="_blank"><img src="assets/icons/Linkedin.png"></a> -->
                <a class="navbar-item p-4 mr-3 is-pulled-right has-background-black" href="https://www.youtube.com/channel/UCVJ3aNNjDRFC-OzKfaAbTrQ" target="_blank"><img src="assets/icons/Youtube.png"></a>
            </div>
        </div>
    </nav>
  `,
    styles: [
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

