import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'confirm-dialog-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'dialogs/confirm-dialog/confirm-dialog.component.html'
})

export class ConfirmDialogComponent {
    displayConfirmDialog() {
        // >> confirm-dialog-code
        var options = {
            title: "Race selection",
            message: "Are you sure you want to be a Unicorn?",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };
        dialogs.confirm(options).then((result: boolean) => {
            console.log(result);
        });
        // << confirm-dialog-code
    }
}