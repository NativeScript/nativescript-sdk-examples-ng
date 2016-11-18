// >> unless-directive-code  
import { Component } from '@angular/core';

@Component({
    selector: 'custom-unless-directive',
    templateUrl: "ui-category/ng-directives/custom-unless-directive/unless-directive.component.html",
})
export class CustomUnlessComponent {

    public age: number;
    public condition: boolean;

    constructor() {
        this.condition = true;
    }

    onTap() {
        console.log("onTap age is :" + this.age);
        
        if (this.age >= 18 && this.age !== 0) {
            this.condition = false;
        } else {
            this.condition = true;
        }
    }
}
// << unless-directive-code
