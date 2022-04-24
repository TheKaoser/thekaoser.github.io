import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <figure class="image is-64x64">
            <img class="navbar-item" src="assets/icons/Kaoser.png">
        </figure>
        <p class="navbar-item is-size-4 is-family-arial">Rodrigo Alonso</p>
    </div>
    <div class="navbar-end">
        <figure class="image is-64x64">
            <img class="navbar-item" src="assets/icons//GitHub.png">
        </figure>
        <figure class="image is-64x64">
            <img class="navbar-item" src="assets/icons//Linkedin.png">
        </figure>
        <figure class="image is-64x64">
            <img class="navbar-item" src="assets/icons//Youtube.png">
        </figure>
        <figure class="image is-64x64">
            <img class="navbar-item" src="assets/icons//Twitch.png">
        </figure>
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
