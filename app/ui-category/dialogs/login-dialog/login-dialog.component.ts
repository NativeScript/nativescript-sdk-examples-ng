import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    templateUrl: "ui-category/dialogs/login-dialog/login-dialog.component.html"
})
export class LoginDialogComponent {
    displayLoginDialog() {
        // >> login-dialog-code
        let options = {
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
