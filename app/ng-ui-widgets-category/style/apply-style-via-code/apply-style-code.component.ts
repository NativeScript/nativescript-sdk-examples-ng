import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

@Component({
    moduleId: module.id,
    templateUrl: "./apply-style-code.component.html"
})
export class ApplyStyleCodeComponent implements OnInit {

    constructor(private page: Page) { }

    ngOnInit() {
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
