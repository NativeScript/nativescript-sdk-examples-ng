import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: 'prompt-dialog-component',
    templateUrl: 'ui-category/dialogs/prompt-dialog/prompt-dialog.component.html'
})

export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        let options = {
            title: "Name",
            defaultText: "Enter your name",
            inputType: dialogs.inputType.text, 
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        dialogs.prompt(options).then((result: dialogs.PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
