import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Configure TimePicker", "/time-picker/configure")
];

@Component({
    selector: "time-picker-component",
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TimePickerExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
