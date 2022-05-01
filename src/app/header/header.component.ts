import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item image">
                <img src="assets/icons/Kaoser.png">
            </div>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarSocials">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarSocials" class="navbar-menu">
            <div class="navbar-end">
                <div class="field is-grouped">
                    <img class="navbar-item image" src="assets/icons/GitHub.png">
                    <img class="navbar-item image" src="assets/icons/Linkedin.png">
                    <img class="navbar-item image" src="assets/icons/Youtube.png">
                    <img class="navbar-item image" src="assets/icons/Twitch.png">
                </div>
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
