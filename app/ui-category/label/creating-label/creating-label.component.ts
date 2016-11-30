// >> creating-label-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/label/creating-label/creating-label.component.html"
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
}
// << creating-label-code
