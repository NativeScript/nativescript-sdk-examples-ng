import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Button } from "ui/button";
import { Page } from "ui/page";

@Component({
    selector: 'button-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'button/text/text.component.html'
})

export class ButtonTextComponent implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        let button = this.page.getViewById<Button>("button");
        // >> button-text-code
        button.text = "I am a button";
        // << button-text-code
    }
}