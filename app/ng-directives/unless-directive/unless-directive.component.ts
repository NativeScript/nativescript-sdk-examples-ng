// >> unless-directive-code  
import { Component } from '@angular/core';
import { UnlessDirective } from "./directive-unless";

@Component({
    selector: 'unless-directive-component',
    styleUrls:["ng-directives/unless-directive/unless-directive.component.css"],
    templateUrl: "ng-directives/unless-directive/unless-directive.component.html",
})
export class UnlessDirectiveExampleComponent {

    public age: number;
    public condition: boolean;

    constructor() {
        this.condition = true;
    }

    onTap() {
        if (this.age >= 18 && this.age !== 0) {
            this.condition = false;
        } else {
            this.condition = true;
        }
    }
}
// << unless-directive-code
