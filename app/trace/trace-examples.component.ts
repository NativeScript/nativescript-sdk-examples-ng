import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("Trace Specific categories", "/trace/trace-writer-categories"),
    new Link("Writing a Custom TraceWriter", "/trace/custom-trace-writer")
];

@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraceExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
