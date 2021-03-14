import { ActivatedRoute } from "@angular/router";
import { Directive, OnInit } from "@angular/core";
import { EventData, NavigationButton, Page, isAndroid, isIOS } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";

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

        if (isAndroid) {
            navigationButton.icon = "res://ic_arrow_back_black_24dp";
            navigationButton.on("tap", (args: EventData) => {
                this.routerExtensions.backToPreviousPage();
            });
        } else if (isIOS) {
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
