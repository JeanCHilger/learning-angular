import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

    // public myId = "testId";
    // public isDisabled = true;
    public name = "John Doe";
    public greeting = "";

    constructor() { }

    onClick(event) {
        console.log(event);
        this.greeting = "Welcome with " + event.type;
    }

    ngOnInit() {
    }

}
