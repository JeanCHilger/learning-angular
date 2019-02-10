import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

    // public successClass = "text-success";
    public hasError = false;
    public isSpecial = true;
    public highlightColor = "orange";

    public messageClasses = {
        "text-success": !this.hasError,
        "text-danger": this.hasError,
        "text-special": this.isSpecial
    }

    public titleStyles = {
        color: "blue",
        fontStyle: "italic"
    }

    constructor() { }

    ngOnInit() {
    }

}
