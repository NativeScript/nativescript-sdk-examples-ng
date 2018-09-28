import { ActivatedRoute } from "@angular/router";
import { Directive, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { NavigationButton } from "tns-core-modules/ui/action-bar";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";

@Directive({
    selector: "[sdkToggleNavButton]"
})
export class ToggleNavButtonDirective implements OnInit {
    constructor(route: ActivatedRoute, private page: Page, private routerExtensions: RouterExtensions) {
        let navigationButton = this.createNavigationButton();
        page.actionBar.navigationButton = navigationButton;
    }

    ngOnInit() {
        this.toggleNavigationButtonVisibility(this.page.actionBar.navigationButton);
    }

    createNavigationButton(): NavigationButton {
        let navigationButton = new NavigationButton();
        navigationButton.visibility = "visible";

        if (app.android) {
            navigationButton.icon = "res://ic_arrow_back_black_24dp";
            navigationButton.on("tap", (args: EventData) => {
                this.routerExtensions.backToPreviousPage();
            });
        } else if (app.ios) {
            navigationButton.text = "";
        }

        return navigationButton;
    }

    toggleNavigationButtonVisibility(button: NavigationButton) {
        if (button.actionBar.title === "NativeScript Code Samples") {
            button.visibility = "collapsed";
        }
    }
}
