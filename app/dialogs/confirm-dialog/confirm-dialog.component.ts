import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: 'confirm-dialog-component',
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
