import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer id="footer" class="footer has-background-black">
		<div class="content has-text-centered">
			<p class="is-italic has-text-white">Made by Rodrigo Alonso in 2022</p>
			<a href="https://www.linkedin.com/in/rodrigo-alonso-garcía-amorena/" target="_blank" class="is-bold has-text-white mx-3">Linkedin</a>
			<a href="mailto:rodrigoalonso@rocketmail.com" class="is-bold has-text-white mx-3">Mail</a>
		</div>
	</footer>
  `,
  styles: [
    '#footer { position: relative; top: 100%}',
	  '* { clear:both; }'
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
