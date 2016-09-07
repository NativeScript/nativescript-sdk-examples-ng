import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'action-dialog-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
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