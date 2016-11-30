import { Component } from "@angular/core";
import * as dialogs from "ui/dialogs";

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
        dialogs.action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }
}
