import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Basic WebView", "/web-view/basic"),
    new Link("HTML as source of WebView", "/web-view/html"),
    new Link("WebView - Gestures", "/web-view/gestures"),
    new Link("WebView - Events", "/web-view/events")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
