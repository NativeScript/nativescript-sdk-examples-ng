import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

@Component({
    moduleId: module.id,
    templateUrl: "./styling.component.html"
})
export class ButtonStylingComponent {
    onTap(args: EventData) {
        console.log(`${args.object} tapped!`);
    }
}
