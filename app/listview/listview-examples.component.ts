import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Create ListView", "/creatingListViewExampleComponent"),
    new Link("Customize ListView", "/customizingListViewExampleComponent"),
    new Link("Use item template", "/usingItemTemplateExampleComponent"),
    new Link("Use async pipe", "/usingAsyncPipeExampleComponent")
];

@Component({
    selector: 'listview-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
