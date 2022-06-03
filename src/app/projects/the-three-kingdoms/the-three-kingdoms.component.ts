import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-three-kingdoms',
  template: `
    <div class="project">
			<img id="project-image" src="assets/imgs/TTK.png">
      <p id="title" class="is-size-1 is-bold">The Three Kingdoms</p>
      <div id="description" class="is-size-5 is-italic">
        Three kingdoms that fell into misfortune are now habited by an horde of goblins that fight and reproduce at the same rate. 
        Will you become the goblin god?
      </div>
      <div id="highlights" class="is-size-6 is-italic">
        Highlights:
        <br>
        - TCP Server with logic.
        <br>
        - Multi-threaded clients.
        <br>
        - More than 50 3D models made in Blender.
      </div>
		</div>
  `,
  styles: [
    '#title { margin: 0; position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); color: black; }',
    '#description { margin: 0; position: absolute; top: 50%; left: 10%; right: 10%; color: black; }',
    '#highlights { margin: 0; position: absolute; bottom: 10%; left: 10%; color: black; }',
    '#project-image { width: 100%; height: 100%; object-fit: cover; }',
  ]
})
export class TheThreeKingdomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
