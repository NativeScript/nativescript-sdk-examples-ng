import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Modal page example", "/modal-page/sample-modal-page"),
    new Link("Modal page navigation", "/modal-page/modal-page-navigation"),
    new Link("Modal page ActionBar", "/modal-page/modal-view-actionbar")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalPageExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
