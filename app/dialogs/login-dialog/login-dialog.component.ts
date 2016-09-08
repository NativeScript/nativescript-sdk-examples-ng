import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'login-dialog-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'dialogs/login-dialog/login-dialog.component.html'
})

export class LoginDialogComponent {
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
}