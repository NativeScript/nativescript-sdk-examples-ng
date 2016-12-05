import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./binding-text.component.html"
})
export class ButtonBindingTextComponent {
    public content: string;

    constructor() {
        this.content = "Test button";
    }
}
