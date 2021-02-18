import { Component } from "@angular/core";
import { Dialogs } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./prompt-dialog.component.html"
})
export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        // import { Dialogs } from "@nativescript/core";
        let options: Dialogs.PromptOptions = {
            title: "Hey There",
            defaultText: " Enter your mood ",
            message: "How you doin'",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            neutralButtonText: "Neutral",
            cancelable: true,
            inputType: Dialogs.inputType.text, // email, number, text, password, or email
            capitalizationType: Dialogs.capitalizationType.sentences // all. none, sentences or words
        };

        Dialogs.prompt(options).then((result: Dialogs.PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
