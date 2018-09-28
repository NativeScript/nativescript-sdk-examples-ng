import { Component } from "@angular/core";
import { prompt, PromptResult, inputType, PromptOptions } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./prompt-dialog.component.html"
})
export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        let options: PromptOptions = {
            title: "Hey There",
            defaultText: " Enter your mood ",
            message: "How you doin'",
            inputType: inputType.text,
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            neutralButtonText: "Neutral",
            cancelable: true
        };

        prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
