import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    templateUrl: "./dataentry-signup.component.html",
    styleUrls: ["./style.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupDataEntryExampleComponent  {
    // >> dataentry-signup-code
    public secureproperty= true;

    public onFacebookLoginTap() {
        console.log("login with facebook");
    }

    public onGoogleLoginTap() {
        console.log("login with google");
    }

    public inSignUpTap() {
        console.log("sign up tap");
    }

    public switchChanged(args) {
        console.log(args);
        this.secureproperty = args;
    }

    public signup(name, email, password) {
        console.log("name: " + name + " email: " + email + " password: " + password);
    }

    public forgottenpassword() {
        console.log("forgotten password");
    }
}
// << dataentry-signup-code
