import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Basic WebView", "/web-view/basic"),
    new Link("HTML as source of WebView", "/web-view/html")
];

@Component({
    selector: 'web-view-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WebViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
