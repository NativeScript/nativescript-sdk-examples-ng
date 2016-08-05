// >> disable-switch-code
import {Component, ViewChild, ElementRef} from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import { Switch } from "ui/switch"

@Component({
    selector: 'disable-switch-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: 'switch/disable-switch/disable-switch.component.html',
})

export class DisableSwitchComponent {

    @ViewChild("sw1") firstSwitch: ElementRef;
    @ViewChild("sw2") secondSwitch: ElementRef;
    @ViewChild("sw3") thirdSwitch: ElementRef;

    public onTap(){
        let firstsw:Switch = <Switch>this.firstSwitch.nativeElement;
        let secondsw:Switch = <Switch>this.secondSwitch.nativeElement;
        let thirdsw:Switch = <Switch>this.thirdSwitch.nativeElement;

        firstsw.isEnabled = false;
        secondsw.isEnabled = false;
        thirdsw.isEnabled = false;
    }

}
// << disable-switch-code
