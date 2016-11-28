import { Component, ChangeDetectionStrategy, OnInit, Input}  from "@angular/core";
import {ObservableArray} from "data/observable-array";

@Component({
    selector: "dataentry-sociallogin",
    templateUrl: "common-screens-category/dataentry/dataentry-sociallogin/dataentry-sociallogin.component.html",
    styleUrls: ["common-screens-category/dataentry/dataentry-sociallogin/style.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialLoginDataEntryExampleComponent  {
// >> dataentry-sociallogin-code
    public secureproperty= false;

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

    public signin(email, password) {
        console.log("email: " + email + " password: " + password);
    }

    public forgottenpassword() {
        console.log("forgotten password");
    }
}
// << dataentry-sociallogin-code
