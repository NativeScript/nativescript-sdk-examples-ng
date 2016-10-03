import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic Trace Example", "/basicTraceExampleComponent"),
    new Link("Trace Specific categories Example", "/traceSpecificCategoriesExampleComponent"),
    new Link("Write your own trace message Example", "/traceMessagesExampleComponent")
];

@Component({
    selector: 'trace-example-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TraceExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
