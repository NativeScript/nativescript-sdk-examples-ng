import { Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

@Directive({
    selector: "[sdkExampleTitle]"
})

export class ExampleTitleDirective {
     constructor(route: ActivatedRoute, page: Page) {
        page.actionBar.title = route.snapshot.data["title"];
    }
}
