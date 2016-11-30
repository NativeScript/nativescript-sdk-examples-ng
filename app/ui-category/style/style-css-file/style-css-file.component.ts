import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/style/style-css-file/style-css-file.component.html",
    styleUrls: ["ui-category/style/style-css-file/style.css"]
})
export class StyleCSSFileComponent {
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
