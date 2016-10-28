import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("FlexboxLayout (directions)", "/flexboxLayoutComponentOne"),
    new Link("FlexboxLayout (order, flexGrow and flexShrink)", "/flexboxLayoutComponentTwo"),
    new Link("FlexboxLayout (wrap, flexWrapBefore)", "/flexboxLayoutComponentThree"),
    new Link("AbsoluteLayout", "/absoluteLayoutComponent"),
    new Link("DockLayout", "/dockLayoutComponent"),
    new Link("GridLayout", "/gridLayoutComponent"),
    new Link("StackLayout", "/stackLayoutComponent"),
    new Link("WrapLayout", "/wrapLayoutComponent")
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
