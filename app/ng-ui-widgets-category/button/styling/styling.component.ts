import { Component } from "@angular/core";
import { EventData } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./styling.component.html",
    styleUrls: ["./styling.component.css"]
})
export class ButtonStylingComponent {
    onTap(args: EventData) {
        console.log(`${args.object} tapped!`);
    }
}
