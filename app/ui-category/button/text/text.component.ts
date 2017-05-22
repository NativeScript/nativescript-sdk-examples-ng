import { Component } from "@angular/core";
import { Button } from "ui/button";
import { alert } from "ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./text.component.html"
})
export class ButtonTextComponent {

    onFirstButtonLoaded(args) {
        let button = <Button>args.object;
        // >> button-text-code
        button.text = "Primary button";
        // << button-text-code
    }

    onButtonTap(args) {
        let button = <Button>args.object;
        console.log(button + " tapped!");
    }
}
