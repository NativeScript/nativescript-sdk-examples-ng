import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: 'action-dialog-component',
    templateUrl: 'dialogs/action-dialog/action-dialog.component.html'
})

export class ActionDialogComponent {
    displayActionDialog() {
        // >> action-dialog-code
        var options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };
        dialogs.action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }
}
