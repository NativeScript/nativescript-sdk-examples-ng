import {Component, ViewChild, ElementRef} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { Switch } from "ui/switch"
// >> disable-switch-code
@Component({
    selector: 'disable-switch-component',
    directives: [COMMON_DIRECTIVES],
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
