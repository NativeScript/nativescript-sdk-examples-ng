import { Component } from "@angular/core";
import { capitalizationType, Dialogs, inputType, PromptOptions, PromptResult } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./prompt-dialog.component.html"
})
export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        // import { Dialogs } from "@nativescript/core";
        let options: PromptOptions = {
            title: "Hey There",
            defaultText: " Enter your mood ",
            message: "How you doin'",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            neutralButtonText: "Neutral",
            cancelable: true,
            inputType: inputType.text, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
        };

        Dialogs.prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
