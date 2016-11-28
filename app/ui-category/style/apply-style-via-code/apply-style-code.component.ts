
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";

@Component({
    selector: "apply-style-code-component",
    templateUrl: "ui-category/style/apply-style-via-code/apply-style-code.component.html"
})

export class ApplyStyleCodeComponent implements OnInit {

    constructor(private page: Page) { }

    ngOnInit() {
        let layout: StackLayout = this.page.getViewById<StackLayout>("mainlayout");

        // >> setting-style-via-code
        this.page.css = "#labelStyle{ background-color: #564448; color: white} button {font-size: 36; color: blue;}" +
                        " .message {font-size: 36; color: #284848; text-align: center; margin: 0 20;}";
        // << setting-style-via-code
    }

    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;
    }

}

