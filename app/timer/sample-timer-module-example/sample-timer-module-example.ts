// >> time-picker-configure-code
import { Component } from "@angular/core";
import {setInterval, setTimeout, clearInterval} from "timer"

@Component({
    selector: 'time-picker-component',
    templateUrl: 'timer/sample-timer-module-example/sample-timer-module-example.html'
})

export class SampleTimerModuleExampleComponent {
    public buttoncolor;
    public color = ["green", "yellow", "red"];
    public id;
    public status = true;

    constructor(){
        this.buttoncolor = "blue";
        var that =this;
        this.id = setInterval(() => {
            var randNumber = Math.floor(Math.random() * (that.color.length));
            that.buttoncolor = that.color[randNumber];
        }, 1000)
    }
    
    public onButtonTap(){
        if(this.status){
            clearInterval(this.id);
            this.status=false;
        }
        else{
            var that =this;
            this.id = setInterval(() => {
                var randNumber = Math.floor(Math.random() * (that.color.length));
                that.buttoncolor = that.color[randNumber];
            }, 1000)
            this.status=true;
        }
    }
}
// << time-picker-configure-code
