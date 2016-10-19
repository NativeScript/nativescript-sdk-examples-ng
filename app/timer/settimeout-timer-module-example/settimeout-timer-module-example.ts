// >> settimeout-time-picker-configure-code
import { Component } from "@angular/core";
import {setInterval, setTimeout, clearInterval} from "timer";
import {Color} from "color";

@Component({
    selector: 'settimeout-timer-module-example',
    styleUrls:['timer/settimeout-timer-module-example/settimeout-timer-module-example.css'],
    templateUrl: 'timer/settimeout-timer-module-example/settimeout-timer-module-example.html'
})

export class SettimeoutTimerModuleExample {
    public counter = 0;
    public buttonstyle = "btn btn-primary btn-rounded-sm";

    constructor(){}

    public increase(args){
        args.object.backgroundColor = new Color("#3078FE");
        var that = this;
        setTimeout(function(){
            that.counter++;
            args.object.backgroundColor = new Color("#30BCFF");
        }, 1000);
        this.buttonstyle = "btn btn-rounded-sm btn-active"
    }
    public decrease(args){
        args.object.backgroundColor = new Color("#3078FE");
        var that = this;
        setTimeout(function(){
            that.counter--;
            args.object.backgroundColor = new Color("#30BCFF");
        }, 1000)
    }
}
// << settimeout-time-picker-configure-code
