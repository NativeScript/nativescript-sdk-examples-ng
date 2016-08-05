// >> using-ngswitch-code 
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

@Component({
    selector: 'ngswitch-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: "ngswitch/ngswitch-usage/ngswitch-usage.component.html",
})

export class UsingNgSwitchExamplesComponent {
    public color: string;

    onBlue() {
        this.color = "blue";
    }

    onRed() {
        this.color = "red";
    }

    onYellow() {
        this.color = "yellow";
    }
}
// << using-ngswitch-code        