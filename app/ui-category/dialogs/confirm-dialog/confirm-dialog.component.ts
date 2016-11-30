import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/dialogs/confirm-dialog/confirm-dialog.component.html"
})
export class ConfirmDialogComponent {
    displayConfirmDialog() {
        // >> confirm-dialog-code
        let options = {
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
