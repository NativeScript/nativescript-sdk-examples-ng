import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'dialog-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'dialogs/display-dialogs/display-dialogs.component.html'
})

export class DisplayDialogsComponent {
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

    displayAlertDialog() {
        // >> alert-dialog-code
        var options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };
        dialogs.alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }

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

    displayLoginDialog() {
        // >> login-dialog-code
        var options = {
            title: "Login",
            message: "Login",
            username: "john_doe",
            password: "", 
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        dialogs.login(options).then((loginResult: dialogs.LoginResult) => {
            console.log(loginResult.result);
        });
        // << login-dialog-code
    }

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