import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test', // class- selector: '.a-t' attribute- selector: '[a-t]'
	//templateUrl: './test.component.html', // or:
	template: `
        <div>
            Inline template
        </div>`,
	//styleUrls: ['./test.component.css'] // or
	styles: [`
        div {
            color: red;
        }
    `]
})
export class TestComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

}
