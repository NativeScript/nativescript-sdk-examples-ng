import { Component } from "@angular/core";
import { Dialogs } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./action-dialog.component.html"
})
export class ActionDialogComponent {
    displayActionDialog() {
        // >> action-dialog-code
        let options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };

        Dialogs.action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }
}
