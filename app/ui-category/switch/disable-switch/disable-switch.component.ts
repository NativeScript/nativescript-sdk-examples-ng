// tslint:disable:no-access-missing-member
// >> disable-switch-code
import { Component, ViewChild, ElementRef } from "@angular/core";
import { Switch } from "ui/switch";

@Component({
    moduleId: module.id,
    templateUrl: "./disable-switch.component.html",
    styleUrls: ["./../switch.style.css"],
})
export class DisableSwitchComponent {

    @ViewChild("sw1") firstSwitch: ElementRef;
    @ViewChild("sw2") secondSwitch: ElementRef;
    @ViewChild("sw3") thirdSwitch: ElementRef;

    public onTap() {
        let firstsw: Switch = <Switch>this.firstSwitch.nativeElement;
        let secondsw: Switch = <Switch>this.secondSwitch.nativeElement;
        let thirdsw: Switch = <Switch>this.thirdSwitch.nativeElement;

        firstsw.isEnabled = false;
        secondsw.isEnabled = false;
        thirdsw.isEnabled = false;
    }

}
// << disable-switch-code
