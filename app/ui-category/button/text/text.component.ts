import { Component, OnInit } from "@angular/core";
import { Button } from "ui/button";
import { Page } from "ui/page";

@Component({
    selector: 'button-component',
    templateUrl: 'ui-category/button/text/text.component.html'
})

export class ButtonTextComponent implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        let button = this.page.getViewById<Button>("button");
        // >> button-text-code
        button.text = "Primary button";
        // << button-text-code
    }
}
