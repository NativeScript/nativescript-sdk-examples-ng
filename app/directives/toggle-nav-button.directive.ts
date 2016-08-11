import { Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

@Directive({
    selector: "[toggleNavButton]"
})

export class ToggleNavButtonDirective {
     constructor(route: ActivatedRoute, page:Page) {
        page.actionBar.navigationButton.visibility = "visible";
        console.log("page.actionBar.navigationButton.visibility: " + page.actionBar.navigationButton.visibility);
    }
}