// >> textview-edit-disable-code
import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { TextView } from "tns-core-modules/ui/text-view";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {
    tvtext = "";

    onTextChange(args: EventData) {
        const tv = args.object as TextView;
        console.log(tv.text);
    }
}
// << textview-edit-disable-code
