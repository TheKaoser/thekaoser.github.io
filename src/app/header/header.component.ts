import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar is-black is-fixed-top py-1" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item ml-2 p-4" routerLink=""><img src="assets/icons/Kaoser.png"></a>
            <a class="navbar-item is-size-5" routerLink="">RA</a>
            <a class="navbar-item is-size-5" routerLink="projects">Projects</a>
            <a class="navbar-item is-size-5" routerLink="reviews">Reviews</a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarSocials">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarSocials" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item p-4 mr-3" href="https://github.com/TheKaoser" target="_blank"><img src="assets/icons/GitHub.png"></a>
                <a class="navbar-item p-4 mr-3" href="https://www.twitch.tv/thekaoser" target="_blank"><img src="assets/icons/Twitch.png"></a>
                <a class="navbar-item p-4 mr-3" href="https://www.linkedin.com/in/rodrigo-alonso-garcía-amorena/" target="_blank"><img src="assets/icons/Linkedin.png"></a>
                <a class="navbar-item p-4 mr-3" href="https://www.youtube.com/channel/UCVJ3aNNjDRFC-OzKfaAbTrQ" target="_blank"><img src="assets/icons/Youtube.png"></a>
            </div>
        </div>
    </nav>
  `,
    styles: [
    ]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
