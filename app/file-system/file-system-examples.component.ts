import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Paths", "/file-system/paths"),
    new Link("Create", "/file-system/create"),
    new Link("Read", "/file-system/read"),
    new Link("Update", "/file-system/update"),
    new Link("Delete", "/file-system/delete")
];

@Component({
    selector: 'file-system-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FileSystemExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
