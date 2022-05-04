import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
		<div class="content has-text-centered">
			<p>
			Made by <strong>Rodrigo Alonso</strong> in 2022
			</p>
		</div>
	</footer>
  `,
  styles: [
	  
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
