import { Component } from "@angular/core";
import { prompt, PromptResult, PromptOptions, inputType, capitalizationType } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./prompt-dialog.component.html"
})
export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        /*
        import {
            prompt,
            PromptResult,
            PromptOptions,
            inputType,
            capitalizationType
        } from "tns-core-modules/ui/dialogs";
        */
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

        prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
