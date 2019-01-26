import { Component } from '@angular/core';

@Component({    // metadata
	selector: 'app-root', // custom HTML tag that represents this component
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'hello-world';
}
