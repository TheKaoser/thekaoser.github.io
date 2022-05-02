import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <body>
      <app-about-me></app-about-me>
      <app-skills></app-skills>
    </body>
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'portfolio';
}
