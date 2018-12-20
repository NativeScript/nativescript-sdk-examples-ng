import { Component } from "@angular/core";
import { login, LoginOptions, LoginResult } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./login-dialog.component.html"
})
export class LoginDialogComponent {
    displayLoginDialog() {
        // >> login-dialog-code
        let options: LoginOptions = {
            title: "Login Form",
            message: "Enter your credentials",
            okButtonText: "Login",
            cancelButtonText: "Cancel",
            neutralButtonText: "Neutral",
            userNameHint: "Enter your username",
            passwordHint: "Enter your password",
            userName: "john_doe",
            password: "123456"
        };

        login(options).then((loginResult: LoginResult) => {
            console.log(loginResult.result);
        });
        // << login-dialog-code
    }
}
