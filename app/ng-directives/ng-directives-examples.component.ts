import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("*ngIf basic example", "/usingNgIfExampleComponent"),
    new Link("*ngIf platform specific elements", "/usingNgIfForPlatformSpecificComponent"),
    new Link("*ngFor example", "/ngForRepeatItemsComponent"),
    new Link("ngSwitch basic example", "/usingNgSwitchExampleComponent"),
    new Link("Create custom *ng directive", "/createCustomDirectiveExampleComponent"),
    new Link("Unless directive example", "/unlessDirectiveExampleComponent")

];

@Component({
    selector: 'ng-directives-examples-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDirectivesExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
