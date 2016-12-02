import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("FPS Meter usage", "/fps-meter/fps-meter-usage")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FpsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
