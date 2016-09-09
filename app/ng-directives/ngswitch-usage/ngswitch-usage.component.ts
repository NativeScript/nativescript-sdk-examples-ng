// >> using-ngswitch-code 
import { Component } from "@angular/core";

@Component({
    selector: 'ngswitch-component',
    // >> (hide)
    styleUrls:['ng-directives/ngswitch-usage/style.css'],
    // << (hide)
    templateUrl: "ng-directives/ngswitch-usage/ngswitch-usage.component.html",
})

export class UsingNgSwitchExamplesComponent {
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
