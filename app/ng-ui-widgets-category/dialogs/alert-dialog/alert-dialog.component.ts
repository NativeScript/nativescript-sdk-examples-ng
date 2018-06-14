import { Component } from "@angular/core";
import { alert } from "ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./alert-dialog.component.html"
})
export class AlertDialogComponent {
    displayAlertDialog() {
        // >> alert-dialog-code
        let options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };

        alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
}
