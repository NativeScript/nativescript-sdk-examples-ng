// >> using-ngswitch-code 
import { Component } from "@angular/core";

@Component({
    selector: 'ngswitch-directive',
    templateUrl: "ui-category/ng-directives/ngswitch-directive/ngswitch-directive.component.html",
})

export class NgSwitchComponent {
    public color: string;

    onBlue() {
        this.color = "blue";
    }

    onPurple() {
        this.color = "purple";
    }

    onYellow() {
        this.color = "yellow";
    }
}
// << using-ngswitch-code        
