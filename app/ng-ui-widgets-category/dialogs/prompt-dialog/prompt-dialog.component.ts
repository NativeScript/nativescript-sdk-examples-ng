import { Component } from "@angular/core";
import { prompt, PromptResult, inputType } from "ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./prompt-dialog.component.html"
})
export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        let options = {
            title: "Name",
            defaultText: "Enter your name",
            inputType: inputType.text,
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };

        prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
