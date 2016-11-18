import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("FlexboxLayout (flexDirection)", "/layouts/flexbox-layout-one"),
    new Link("FlexboxLayout (order, flexGrow and flexShrink)", "/layouts/flexbox-layout-two"),
    new Link("FlexboxLayout (flexWrap, justifyContent)", "/layouts/flexbox-layout-three"),
    new Link("AbsoluteLayout", "/layouts/absolute-layout"),
    new Link("DockLayout", "/layouts/dock-layout"),
    new Link("GridLayout", "/layouts/grid-layout"),
    new Link("StackLayout", "/layouts/stack-layout"),
    new Link("WrapLayout", "/layouts/wrap-layout")
];

@Component({
    selector: 'layouts-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LayoutsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
