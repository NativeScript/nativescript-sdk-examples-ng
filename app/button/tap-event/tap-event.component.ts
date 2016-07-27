import { Component } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'button-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'button/tap-event/tap-event.component.html'
})

export class ButtonTapEventComponent {      
    // >> button-tap-event-code
    onTap(args: EventData){
        alert("Button tapped!");
    }
    // << button-tap-event-code
}