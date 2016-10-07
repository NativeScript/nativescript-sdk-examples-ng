import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Paths", "/pathsExampleComponent"),
    new Link("Create", "/createExampleComponent"),
    new Link("Read", "/readExampleComponent"),
    new Link("Update", "/updateExampleComponent"),
    new Link("Delete", "/deleteExampleComponent")
];

@Component({
    selector: 'file-system-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FileSystemxamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
