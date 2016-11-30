import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/button/binding-text/binding-text.component.html"
})
export class ButtonBindingTextComponent {
    public content: string;

    constructor() {
        this.content = "Test button";
    }
}
