import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <body>
      <app-about-me></app-about-me>
    </body>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio';
}
