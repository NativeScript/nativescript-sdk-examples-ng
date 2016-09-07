import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'prompt-dialog-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'dialogs/prompt-dialog/prompt-dialog.component.html'
})

export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        var options = {
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
