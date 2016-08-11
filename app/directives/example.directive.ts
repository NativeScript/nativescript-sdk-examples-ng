import { Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

@Directive({
    selector: "[exampleTitle]"
})

export class ExampleTitleDirective {
     constructor(route: ActivatedRoute, page:Page) {
        page.actionBar.title = route.snapshot.data["title"];
    }
}