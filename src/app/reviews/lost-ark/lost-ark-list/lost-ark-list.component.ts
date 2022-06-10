import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lost-ark-list',
  template: `
    <a routerLink="lost-ark"> 
		<div class="review-list">
			<p class="review-list-title is-size-1 is-bold">Lost Ark</p>
			<div class="review-list-description is-size-5 is-italic">
				"Abarca muchos géneros, lugares y mecánicas para convertirse en uno de los MMOs más complejos y pulidos del momento."
			</div>
			<img class="review-list-image" src="assets/imgs/LA/LAHeader.png">
		</div>
	</a>
  `,
  styles: [
  ]
})
export class LostArkListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
