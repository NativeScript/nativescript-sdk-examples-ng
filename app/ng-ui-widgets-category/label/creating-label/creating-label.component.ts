// >> creating-label-code
import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";

@Component({
    moduleId: module.id,
    templateUrl: "./creating-label.component.html"
})
export class CreatingLabelComponent {

    public oneway = "One way bound label";
    public twoway = "Two way bound label";
    public counter: number;

    constructor() {
        this.counter = 0;
    }

    changeLabelText() {
        this.twoway += " Two way bound label ";
        this.counter += 1;
    }

    onTextChanged(args: EventData) {
        let label = <Label>args.object;
        console.log("onTextChanged for " + this.counter + " times for element " + label);
    }
}
// << creating-label-code
