// >> settimeout-time-picker-configure-code
import { Component } from "@angular/core";
import {setInterval, setTimeout, clearInterval} from "timer"

@Component({
    selector: 'settimeout-timer-module-example',
    styleUrls:['timer/settimeout-timer-module-example/settimeout-timer-module-example.css'],
    templateUrl: 'timer/settimeout-timer-module-example/settimeout-timer-module-example.html'
})

export class SettimeoutTimerModuleExample {
    public counter = 0;

    constructor(){}
    


    public increase(){
        var that = this;
        setTimeout(function(){
            that.counter++;
        }, 2000)
    }
    public decrease(){
        var that = this;
        setTimeout(function(){
            that.counter--;
        }, 2000)
    }
}
// << settimeout-time-picker-configure-code
