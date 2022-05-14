import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	template: `
  <section class="section">
	  <div class="container">
		<form>
			<div class="field">
				<label class="label">Name</label>
				<div class="control has-icons-left has-icons-right">
					<input class="input is-success" type="text" placeholder="Text input" value="bulma">
					<span class="icon is-small is-left">
					<i class="fas fa-user"></i>
					</span>
					<span class="icon is-small is-right">
					<i class="fas fa-check"></i>
					</span>
				</div>
				<p class="help is-success">This username is available</p>
			</div>

			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left has-icons-right">
					<input class="input is-danger" type="email" placeholder="Email input" value="hello@">
					<span class="icon is-small is-left">
					<i class="fas fa-envelope"></i>
					</span>
					<span class="icon is-small is-right">
					<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
				<p class="help is-danger">This email is invalid</p>
			</div>

			<div class="field">
				<label class="label">Message</label>
				<div class="control">
					<textarea class="textarea" placeholder="Textarea"></textarea>
				</div>
			</div>

			<div class="control">
				<button class="button is-link">Submit</button>
			</div>
		</form>
	  </div>
  </section>
  `,
	styles: [
		'* { clear:both; }'
	]
})
export class ContactComponent implements OnInit {
	// name: string;
	// email: string;
	// message: string;

	constructor() { }

	ngOnInit(): void {
	}

}
