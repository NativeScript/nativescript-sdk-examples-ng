import { Component } from "@angular/core";
import { EventData } from "data/observable";

@Component({
    selector: 'button-component',
    templateUrl: 'button/tap-event/tap-event.component.html'
})

export class ButtonTapEventComponent {      
    // >> button-tap-event-code
    onTap(args: EventData){
        alert("Button tapped!");
    }
    // << button-tap-event-code
}
